// Getting the elements from the HTML

let payButton = document.getElementById("pay");
let cancelPayment = document.getElementById("closePay");
let paymentSuccesful = document.getElementById("paymentSuccesful");
let hideShowPopup = document.getElementById("hideShow");
let cardName = document.getElementById("nameOnCard")

payButton.addEventListener("click", () => {
        paymentSuccesful.style.display = "block";
        cancelPayment.innerText = "CLOSE"
})

cancelPayment.addEventListener("click", () => {
    hideShowPopup.style.display = "none"
    cancelPayment.innerText = "CANCEL"
    paymentSuccesful.style.display = "none";
})

