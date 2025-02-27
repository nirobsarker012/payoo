// Adding getInputValuesById
function getInputValuesById(id) {
  const value = document.getElementById(id).value;
  convertedValue = parseInt(value);
  return convertedValue;
}

function getInputInnerTextById(id) {
  const value = document.getElementById(id).innerText;
  convertedValue = parseInt(value);
  return convertedValue;
}
