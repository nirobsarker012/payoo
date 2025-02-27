document.querySelector("#cashout").style.display = "none";
document.querySelector("#transferMoney").style.display = "none";
document.querySelector("#getBonus").style.display = "none";
document.querySelector("#payBill").style.display = "none";

document.querySelector("#add-money").addEventListener("click", function () {
  document.querySelector("#cashout").style.display = "none";
  document.querySelector("#addmoney").style.display = "block";
  document.querySelector("#transferMoney").style.display = "none";
  document.querySelector("#payBill").style.display = "none";
  document.querySelector("#getBonus").style.display = "none";
});

document.querySelector("#cash-out").addEventListener("click", function () {
  document.querySelector("#cashout").style.display = "block";
  document.querySelector("#addmoney").style.display = "none";
  document.querySelector("#transferMoney").style.display = "none";
  document.querySelector("#payBill").style.display = "none";
  document.querySelector("#getBonus").style.display = "none";
});

document
  .querySelector("#transfer-money")
  .addEventListener("click", function () {
    document.querySelector("#cashout").style.display = "none";
    document.querySelector("#addmoney").style.display = "none";
    document.querySelector("#getBonus").style.display = "none";
    document.querySelector("#payBill").style.display = "none";
    document.querySelector("#transferMoney").style.display = "block";
  });

document.querySelector("#get-bonus").addEventListener("click", function () {
  document.querySelector("#cashout").style.display = "none";
  document.querySelector("#addmoney").style.display = "none";
  document.querySelector("#transferMoney").style.display = "none";
  document.querySelector("#payBill").style.display = "none";
  document.querySelector("#getBonus").style.display = "block";
});

document.querySelector("#pay-bill").addEventListener("click", function () {
  document.querySelector("#cashout").style.display = "none";
  document.querySelector("#addmoney").style.display = "none";
  document.querySelector("#transferMoney").style.display = "none";
  document.querySelector("#getBonus").style.display = "none";
  document.querySelector("#payBill").style.display = "block";
});
