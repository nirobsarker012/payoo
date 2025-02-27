document
  .querySelector("#withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const withdrawPinNumber = document.querySelector("#withdraw-pin").value;
    convertedPinNumber = parseInt(withdrawPinNumber);
    const withdrawAmountNumber =
      document.querySelector("#withdraw-amount").value;
    convertedWithdrawAmountNumber = parseInt(withdrawAmountNumber);
    const mainBalance = document.querySelector("#balance").innerText;
    convertedMainBalance = parseInt(mainBalance);
    const withdrawAccountNumber =
      document.querySelector("#withdraw-acc-no").value;
    // convertedWithdrawAccountNumber = parseInt(withdrawAccountNumber);

    // condition
    if (withdrawAccountNumber.length === 11) {
      if (convertedPinNumber === 1234) {
        const sum = convertedMainBalance - convertedWithdrawAmountNumber;
        document.querySelector("#balance").innerText = sum;
      } else {
        alert("Incorrect Pin Number");
      }
    } else {
      alert("Invalid Account Number");
    }
  });
