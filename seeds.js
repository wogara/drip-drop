var mongoose = require('mongoose');
var Product = require("./models/product");
var Order = require("./models/order");

var data = [
    {
        product_id:1,
        name: "Masked Hoodie",
        fullName: "Unisex Drip Camo Masked Hoodie",
        image: ["/images/hoodie1.png"],
        secondImages: ["/images/hoodie2.png","/images/hoodie3.png","/images/hoodie4.png","/images/hoodie5.png","/images/hoodie6.png"],
        price: 69,
        description: ['Left your mask at home? No worries, this hoodie has you covered. With a tuckable incorporated mask, it will help you battle both the cold and the common cold.', 'Disclaimer: Please understand that the incorporated face masks are not a replacement for medical grade Personal Protective Equipment.']   
    },
    {
        product_id:2,
        name: "Joggers",
        fullName: "Drip Camo Everyday Joggers",
        image: ["/images/joggers1.png"],
        secondImages:["/images/joggers2.png","/images/joggers3.png","/images/joggers4.png","/images/joggers5.png","/images/joggers6.png","/images/joggers7.png"],
        price: 59,
        description: ["Stop wearing the same pair of jeans all the time. Wear these instead. They're much more comfortable"]
    },
    {

        product_id:3,
        name: "Crop Top",
        fullName: "Drip Camo Racer Top",
        image: ["/images/croptop1.png"],
        secondImages: ["/images/croptop2.png","/images/croptop3.png","/images/croptop4.png", "/images/croptop5.png"],
        price: 29,
        description: ['Support where you need it, comfort where you want it, and drip whether you want it or not.']
    }
]


function seedDB(){
    Product.deleteMany({},function(err){
        if (err){
            console.log(err);
        }else{
            console.log("removed items");
            data.forEach(function(seed){
                Product.create(seed,function(err,pie){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("added item");
                    }
                })
            })
        }
    })
}

seedDB();

module.exports = seedDB;
