// setup up btn configuration
document.querySelector("#add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const amountId = document.querySelector("#amount").value;
  const convertedAmountInt = parseInt(amountId);
  // setup pin number
  const pinNumber = document.querySelector("#pin").value;
  const convertedPin = parseInt(pinNumber);
  // Setup balance
  const mainBalance = document.querySelector("#balance").innerText;
  const convertedMainBalance = parseInt(mainBalance);

  // checking pin verification
  if (convertedPin === 1234) {
    const sum = convertedMainBalance + convertedAmountInt;
    document.querySelector("#balance").innerText = sum;
  } else {
    alert("Incorrect Pin Number");
  }
});
