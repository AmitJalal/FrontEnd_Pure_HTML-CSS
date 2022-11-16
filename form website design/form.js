const getMembership = document.querySelector(".go-pro");
const paymentForm = document.querySelector(".payment__form");
const makePayment = document.querySelector(".payment__form button");
const confirmPayment = document.querySelector(".form__remove");
const confirmBtn = document.querySelector(".form__remove-confirm");
const goBack = document.querySelector(".back");
const paymentSuccess = document.querySelector(".payment__success ");
const paymentDetailsBtn = document.querySelector("div > .payment-details");
const invoice = document.querySelector(".payment__invoice");
const closeInvoice = document.querySelector(".close-btn");

getMembership.addEventListener("click", () => {
  getMembership.style = "display: none";
  paymentForm.style = "display: flex";
});

makePayment.addEventListener("click", () => {
  paymentForm.style = "display:none";
  confirmPayment.style = "display:flex";
});

confirmBtn.addEventListener("click", () => {
  confirmPayment.style = "display:none";
  paymentSuccess.style = "display:flex";
});

goBack.addEventListener("click", () => {
  paymentForm.style = "display:flex";
  confirmPayment.style = "display:none";
});
paymentDetailsBtn.addEventListener("click", () => {
  paymentSuccess.style = "display:none";
  invoice.style = "display:flex";
});

closeInvoice.addEventListener("click", () => {
  invoice.style = "display:none";
  getMembership.style = "display:flex";
});
