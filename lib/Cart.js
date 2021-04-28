'use strict';

const config = require('./config');

class Cart {
    static addToCart(product, size, cart) {
        if(!this.inCart(product.product_id, size, cart)) {
            let format = new Intl.NumberFormat(config.locale.lang, {style: 'currency', currency: config.locale.currency });
            let prod = {
              id: product.product_id,
              name: product.name,
              price: product.price,
              qty:1,
              size: size,
              image: product.image,
            };
            cart.items.push(prod);
        }else{
            if(cart.items.length > 0){
                cart.items.forEach(item => {
                    if(item.id == product.product_id && item.size==size) {
                        item.qty+=1;
                    }
                 });
            }
        }
        this.calculateQuantity(cart);
        this.calculateTotals(cart);
    }

    static removeFromCart(id, size,  cart) {
        for(let i = 0; i < cart.items.length; i++) {
            let item = cart.items[i];
            //console.log('removed item' + item);
            if(item.id == id && item.size ==size) {
                cart.items.splice(i, 1);
                this.calculateTotals(cart);
                this.calculateQuantity(cart);
                break;
            }
        }

    }
    static updateQuantity(name, size, quantity, cart) {
        cart.items.forEach(item => {
            if(item.name == name && item.size==size) {
                item.qty=quantity;
            }
        });
        this.calculateTotals(cart);
        this.calculateQuantity(cart);

    }

    static updateCart(ids = [], qtys = [], cart) {
        let map = [];
        let updated = false;

        ids.forEach(id => {
           qtys.forEach(qty => {
              map.push({
                  id: parseInt(id, 10),
                  qty: parseInt(qty, 10)
              });
           });
        });
        map.forEach(obj => {
            cart.items.forEach(item => {
               if(item.id === obj.id) {
                   if(obj.qty > 0 && obj.qty !== item.qty) {
                       item.qty = obj.qty;
                       updated = true;
                   }
               }
            });
        });
        if(updated) {
            this.calculateTotals(cart);
        }
    }

    static inCart(productID, size, cart) {
        let found = false;
        if(cart.items.length > 0){
        cart.items.forEach(item => {
           if(item.id == productID && item.size==size) {
                //console.log("true");
               found = true;
           }
        });
        }
        return found;
    }
    static setZero(cart) {
        cart.totals = 0.00;
        this.setFormattedTotals(cart);
        cart.quant = 0;
    }

    static calculateTotals(cart) {
        cart.totals = 0.00;
        cart.items.forEach(item => {
            let price = item.price;
            let qty = item.qty;
            let amount = price * qty;

            cart.totals += amount;
        });
        this.setFormattedTotals(cart);
    }
    static calculateQuantity(cart){
        cart.quant = 0;
        cart.items.forEach(item=>{
            let qty = item.qty;
            
            cart.quant = Number(qty) + Number(cart.quant);
        })
    }

    static emptyCart(cart) {
        if(cart) {
            for(let i = 0; i < cart.items.length; i++) {
                let item = cart.items[i];
                cart.items.splice(i, 1);
                this.calculateTotals(cart);
                this.calculateQuantity(cart);
            }
            cart.items= [];
            this.calculateTotals(cart);
            this.calculateQuantity(cart);
        }
    }


    static setFormattedTotals(cart) {
        let format = new Intl.NumberFormat(config.locale.lang, {style: 'currency', currency: config.locale.currency });
        let totals = cart.totals;
        cart.formattedTotals = format.format(totals + 10);
    }

}

module.exports = Cart;
