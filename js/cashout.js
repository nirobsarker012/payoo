document
  .querySelector("#withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const withdrawPinNumber = document.querySelector("#withdraw-pin").value;
    convertedPinNumber = parseInt(withdrawPinNumber);
    const withdrawAmountNumber =
      document.querySelector("#withdraw-amount").value;
    convertedAmountNumber = parseInt(withdrawAmountNumber);
    const mainBalance = document.querySelector("#balance").innerText;
    convertedMainBalance = parseInt(mainBalance);

    // condition
    if (convertedPinNumber === 1234) {
      const sum = convertedMainBalance - convertedAmountNumber;
      document.querySelector("#balance").innerText = sum;
    } else {
      alert("Invalid Pin or Account Number");
    }
  });
