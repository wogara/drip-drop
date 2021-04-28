var orderArray = document.querySelectorAll(".order");
var email = document.getElementById("email");
var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var address = document.getElementById("inputAddress");
var city = document.getElementById("inputCity");
var state = document.getElementById("inputState");
var zip = document.getElementById("inputZip");
var total = document.getElementById("total");
var complete = document.getElementById("complete");
var takeMeHome = document.getElementById("takeMeHome");
var submitButton = document.getElementById("sq-creditcard");
var writtenTotal = document.getElementById("writtenTotal");
var button = document.getElementById("sq-creditcard")
button.addEventListener('click',onGetCardNonce);
const paymentForm = new SqPaymentForm({
    applicationId: "",
    inputClass:'sq-input',
    autoBuild:false,

    inputStyles: [{
        fontSize: '16px',
        lineHeight: '24px',
        padding: '0px',
        placeholderColor: '#a0a0a0',
        backgroundColor: 'transparent',
    }],
    
    cardNumber: {
        elementId: 'sq-card-number',
        placeholder: 'Card Number'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code',
        placeholder: 'Postal'
    },
    
    callbacks: {
        cardNonceResponseReceived: function(errors,nonce,cardData){
            if (errors) {
                console.error("Encountered errors:");
                errors.forEach(function(error){
                    console.error('  ' + error.message);
                });
                alert('Encountered erros');
                return;
            }
            console.log(zip.value);
            order = {nonce:nonce,
                    total: total.value,
                    firstname: firstname.value,
                    lastname: lastname.value,
                    email: email.value,
                    address: address.value,
                    city: city.value,
                    state: state.value,
                    zip: zip.value}
            var products = [];
            var counter = 0;
            orderArray.forEach(function(order){
                  products.push(order.value);
            });
            order["products"] = products;
                    
            fetch('checkout', {
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(order)
            }).
            catch(err => {
                alert("Network error" + err);
            })
            .then(response => {
                if (!response.ok){
                    return response.json().then(errorInfo => Promise.reject(errorInfo));
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                console.log(typeof data);
                complete.textContent="Thank you for your order! You'll receive an e-mail which will act as your receipt. This code here " + data.result.payment.id + " is your payment ID. Kindly e-mail us (dripdropapparel@gmail.com) with this ID if you don't receive your e-mail within 20 minutes.";
                submitButton.style.display="none";
                takeMeHome.textContent="TAKE ME HOME";
                takeMeHome.href="https://www.dripdropapparel.com";
                alert('payment successful');
            })
            .catch(err => {
                console.error(err);
                alert('payment failed')
            });
        }
    }
});
   paymentForm.build();

    function onGetCardNonce(event){
        if (firstname.value && email.value && lastname.value && address.value && city.value && state.value && zip.value){
        event.preventDefault();
        paymentForm.requestCardNonce();
        }
    }     
