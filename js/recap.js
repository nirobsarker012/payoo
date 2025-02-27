document.querySelector("#add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  const accountNumber = document.querySelector("#account-no").value;
  const convertedAccountNumber = parseInt(accountNumber);
  const checkAmount = document.querySelector("#amount").value;
  const convertedCheckAmount = parseInt(checkAmount);
  const mainBalance = document.querySelector("#balance").innerText;
  const convertedMainBalance = parseInt(mainBalance);
  const checkPin = document.querySelector("#pin").value;
  const convertedPin = parseInt(checkPin);

  //   Condition
  if ((convertedAccountNumber.length = 1 <= 11) && convertedPin === 1234) {
    const sum = convertedMainBalance + convertedCheckAmount;
    document.querySelector("#balance").innerText = sum;
  } else {
    alert("Invalid Account or Pin Number");
  }
});
