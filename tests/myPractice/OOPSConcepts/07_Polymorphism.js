"use strict";
class Payment {
    makePayment() {
        console.log("Payment made using different FOP's");
    }
}
class CreditCard extends Payment {
    makePayment() {
        super.makePayment();
        console.log("Payment made using Credit Card");
    }
}
class UPI extends Payment {
    makePayment() {
        console.log("Payment made using UPI");
    }
}
class PayPal extends Payment {
    makePayment() {
        console.log("Payment made using PayPal");
    }
}
let payment1 = new CreditCard();
payment1.makePayment();
let payment2 = new UPI();
payment2.makePayment();
let payment3 = new PayPal();
payment3.makePayment();
