document.querySelector("#add-btn").addEventListener("click", function (event) {
  event.preventDefault();
  //   Adding account Numbers
  const checkAccountNumber = document.querySelector("#account-no").value;
  const addAmount = getInputValuesById("amount");
  console.log(addAmount);
  //   Adding Pin Numbers
  const addPinNumbers = getInputValuesById("pin");
  //  ADDING MAIN_BALANCE
  const mainBalance = getInputInnerTextById("balance");

  //   Condition
  if (checkAccountNumber.length === 11) {
    if (addPinNumbers === 1234) {
      const sum = mainBalance + addAmount;
      console.log(sum);
      document.getElementById("balance").innerText = sum;
    } else {
      alert(`Adding successfully`);
    }
  } else {
    alert(`Invalid account Number`);
  }
});
