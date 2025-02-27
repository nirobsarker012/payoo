//catching button ID
document
  .querySelector("#login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Page for not reloads.
    const phNumber = document.querySelector("#ph-number").value;
    // adding pin number
    const pinNumber = document.querySelector("#pin-number").value;
    const convertedPin = parseInt(pinNumber); // Converted to pin string to number
    if (phNumber.length === 11) {
      if (convertedPin === 1234) {
        window.location.href = "./index.html";
      } else {
        alert("Invalid Pin Number");
      }
    } else {
      alert("Need Valid Account");
    }
  });
