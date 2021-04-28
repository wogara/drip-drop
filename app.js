const squareConnect = require('square-connect');
const session       = require('express-session');
const MongoDBStore  = require('connect-mongodb-session')(session);
const bodyParser    = require('body-parser');
const mongoose      = require('mongoose');
const Security      = require('./lib/Security');
const express       = require('express');
const Product       = require('./models/product');
const favicon       = require('serve-favicon');
const seedDB        = require('./seeds');
const config        = require('./lib/config.js');
const crypto        = require('crypto');
const Order         = require('./models/order');
const path          = require('path');
const Cart          = require('./lib/Cart');
const { google }    = require('googleapis');

const {
    getAuthToken,
    getSpreadSheet,
    getSpreadSheetValues,
    addToSheets
} = require('./googleSheetsService.js');

const app = express();

mongoose.Promise = Promise;

function requireHTTPS(req, res, next){
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
app.use(requireHTTPS);

const sheets = google.sheets('v4');

const trackingspreadsheetId = '*insert sheet ID*';
const quantityspreadsheetId = '*insert sheet ID';
const contactspreadsheetId  = '*insert sheet ID';
const sheetName = 'Sheet1';

//////////////////////////////////////////////////////////////////////////////////////////////email stuff
const fs = require('fs');
const readline = require('readline');

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/gmail.compose'];
// The file token.json stores the user's access and refresh tokens, and is

// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Gmail API.
  //authorize(JSON.parse(content), listLabels);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback, firstname, lastname, email, id, total, address, city, state, zip, products) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
      client_id, client_secret, redirect_uris[0]);

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token));
    callback(oAuth2Client, firstname, lastname, email, id, total, address, city, state, zip, products);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Error retrieving access token', err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

function makeBody(to, from, subject, firstname, lastname, id, total, address, city, state, zip, products) {

var message = "<h1>CONFIRMATION EMAIL</h1>";
for (var i = 0; i < products.length; i++){
    var price = 0;
    var prodString = products[i].toString();
    var len = Number(prodString.length);
    var amount = Number(prodString.charAt(0));
    var item = prodString.charAt(len-1);
    
    if (item == 'e'){
        price = 69;
    }else if (item == 's'){
        price = 59;
    }else{
        price = 29;
    }
    var prodPrice = amount*price;
    message = message + "<h2>Here's what you've bought" +  prodString + "</h2><h2> Here's what you've paid" + prodPrice + "</h2>";


}

message = message + "<h2>Here's your total" +  total + "</h2><h2>Shipping address" + address + ", " + city + ", " + state + " " + zip +"</h2>" ;


 
    
    var str = ["Content-Type: text/html; charset=\"UTF-8\"\n",
        "MIME-Version: 1.0\n",
        "Content-Transfer-Encoding: 7bit\n",
        "to: ", to, "\n",
        "from: ", from, "\n",
        "subject: ", subject, "\n\n",
        message
    ].join('');

    var encodedMail = new Buffer(str).toString("base64").replace(/\+/g, '-').replace(/\//g, '_');
        return encodedMail;
}

function sendMessage(auth, firstname, lastname, email, id, total, address, city, state, zip, products) {

    var plusShipping = Number(total) + 10;
    var totalString = plusShipping.toString();
    var raw = makeBody(email, 'dripdropapparelgmail.com', 'Congratulations!', firstname, lastname, id, totalString, address, city, state, zip, products);
    
    const gmail = google.gmail({version: 'v1', auth});
    gmail.users.messages.send({
        auth: auth,
        userId: 'me',
        resource: {
            raw: raw
        }
    
    }, function(err, response) {
        return(err || response)
    });
    return;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////end email

////////////////////////////////////////////////////////////////////////////////////////////////////sheets
var range = "Sheet1!A1:Z1000";
var valueInputOption = "USER_ENTERED";
var insertDataOption = "INSERT_ROWS";
async function testAddtoSheets(spreadsheetId, resource) {
    try {
        const auth = await getAuthToken();
        const response = await addToSheets({
            spreadsheetId,
            auth,
            range,
            valueInputOption,
            insertDataOption,
            resource
        })
        return;
    } catch(error) {
        console.log(error.message,error.stack);
        return;
    }
    return;
}

const accessToken = '*square access token*';
const defaultClient = squareConnect.ApiClient.instance;
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken=accessToken;
defaultClient.basePath='https://connect.squareup.com';

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
////////////////////////cart

var url = process.env.DATABASEURL || "*database url*";
mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=> {
    console.log("connected to db");
}).catch(err =>{
    console.log("ERROR: ",err.message);
});

var store = new MongoDBStore({
    uri: url,
    collection:'sessions'
});
app.disable('x-powered-by');
app.set('env','development');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
    secret:"the lazy dog jumped over the quick brown fox",
   resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    store: store,
    name: config.name + '-' + Security.generateId(),
    genid: (req) =>{
        return Security.generateId()
    }
}));
/////////////////////////

function getCart(req) {
    if(!req.session.cart) {
        req.session.cart = {
            items: [],
            totals: 0.00,
            formattedTotals:''
        };
    };
    let sess= req.session;
    let cart = (typeof sess.cart !== 'undefined') ? sess.cart: false;
    return cart;
 


}
app.get("/",function(req,res){

    let cart = getCart(req);
    res.render("home",{cart:cart});

});

/////////////////////////cart
app.get("/shop", function(req,res) {

    let cart = getCart(req);
  
    Product.find({},function(err,products){
        if(err){
            console.log(err);
        }else{
            res.render("shop",{loc: "SHOP",cart:cart,products:products,nonce:Security.md5(req.sessionID + req.headers['user-agent'])})
        }
    })
})

app.post('/cart',function(req,res){
    var product = req.body.product_id;
    var size = req.body.size;
    if(Security.isValidNonce(req.body.nonce,req)){
        Product.findOne({product_id:product}).then(prod=>{
        let cart = (req.session.cart) ? req.session.cart :null;
        Cart.addToCart(prod,size,cart);
        res.redirect("/shop");
    }).catch(err=>{
        console.log(err);
        res.redirect("/");
    });
    }else{
        res.redirect("/shop");
    }
});            

app.post('/remove',function(req,res){
    var product = req.body.id;
    var size = req.body.size;
    if(Security.isValidNonce(req.body.nonce,req)){
        let cart = (req.session.cart) ? req.session.cart :null;
        Cart.removeFromCart(product,size,cart);
        res.redirect("/cart");
    }else{
        res.redirect("/shop");
    }

});

app.post("/updatecart",function(req,res){
    let cart = (req.session.cart) ? req.session.cart :null;
    if (req.body.quantity.length <= 1){
        Cart.updateQuantity(req.body.name,req.body.size,req.body.quantity,cart);
    }else{
        for (i = 0; i < req.body.quantity.length; i++){
            Cart.updateQuantity(req.body.name[i],req.body.size[i],req.body.quantity[i],cart);
        };
    }
    res.redirect("/checkout");

});

app.get("/cart",function(req,res){
    let cart = getCart(req);
    res.render('cart',{loc: "CART",cart:cart,
    nonce: Security.md5(req.sessionID + req.headers['user-agent'])});
});

app.get("/checkout",function(req,res){
    let cart = getCart(req);
    res.render('checkout',{loc:"CHECKOUT",cart:cart,
    nonce: Security.md5(req.sessionID + req.headers['user-agent'])});
});

app.post("/checkout", async (req,res) => {
   
    const request_params = req.body;
    const idempotency_key = crypto.randomBytes(22).toString('hex');
    const payments_api = new squareConnect.PaymentsApi();
    var chargedTotal = Number(req.body.total);
    chargedTotal = chargedTotal + 10;
    chargedTotal = chargedTotal*100;
    const request_body = {
        source_id: request_params.nonce,
        amount_money: {
            amount:Number(chargedTotal),
            currency: 'USD'
        },
        idempotency_key: idempotency_key
    };
    try{
        const response = await payments_api.createPayment(request_body);
        res.status(200).json({
            'title': 'Payment Successful',
            'result': response
        });
        var productString = request_params.products.join();
        var trackingData = {

            values: [
                [request_params.email, request_params.firstname + " " +  request_params.lastname, "", request_params.address, "", request_params.city, request_params.state,request_params.zip, "USA", response.payment.id, productString]
            ]
        }
        testAddtoSheets(trackingspreadsheetId, trackingData);
fs.readFile('credentials.json', function processClientSecrets(err, content) {
    if (err) {
       console.log('Error loading client secret file: ' + err);
        return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Gmail API.
    authorize(JSON.parse(content), sendMessage, request_params.firstname, request_params.lastname, request_params.email, response.payment.id, request_params.total, request_params.address, request_params.city, request_params.state,request_params.zip, request_params.products);
});
        var correctId = response.payment.id;
        Order.create({firstname:request_params.firstname,
        lastname: request_params.lastname,
        email:request_params.email,
        products:request_params.products,
        address:request_params.address,
        city: request_params.city,
        zip: request_params.zip,
        id: correctId,
        total: request_params.total,
        completed: "false"
        },function(err,order){
            if(err){
                console.log(err);
                return;
            }else{
                console.log("empty cart");
                let cart = (req.session.cart) ? req.session.cart :null;
                cart.items = [];
                Cart.setZero(cart);
                return;
            }
        });
    } catch(error){
        console.log(error);
        res.status(500).json({
            'title': 'Payment Failure',
            'result':error
        });
        return;
    }
    
});

app.get('/about',function(req,res){
    let cart = getCart(req);  
    res.render("about",{loc: "ABOUT",cart:cart});
});

app.get('/faq',function(req,res){
    let cart = getCart(req); 
    res.render("faq",{loc:"FAQ",cart:cart});
});

app.get('/returns',function(req,res){
    let cart = getCart(req); 
    res.render("returns",{loc:"RETURNS",cart:cart});
});

app.get('/mission',function(req,res){
    let cart = getCart(req);   
    res.render("mission",{loc:"MISSON",cart:cart});
});

app.get('/story',function(req,res){
    let cart = getCart(req); 
    res.render("story",{loc:"STORY",cart:cart});
});

app.get('/graphics',function(req,res){
    let cart = getCart(req); 
    res.render("graphics",{loc: "GRAPHICS",cart:cart});
});

app.get('/contact',function(req,res){
    let cart = getCart(req);
    res.render("contact",{loc: "CONTACT",cart:cart});
});
app.post('/contact',function(req,res){
    var trackingData = {
            values: [
                [req.body.name,req.body.email,req.body.number,req.body.text]
            ]
            
        }
    testAddtoSheets(contactspreadsheetId, trackingData);
});
       

app.listen(process.env.PORT || 3000,function(){
	console.log("app listening on port 3000");
});

