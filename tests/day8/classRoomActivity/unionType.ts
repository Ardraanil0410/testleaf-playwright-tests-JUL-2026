type PaymentMethod = "UPI"|"Credit Card"|"PayPal"

function makePayment(paymentType:PaymentMethod){

    console.log(`Payment method chosen :,${paymentType} `)


}
makePayment("UPI")
makePayment("Credit Card")
