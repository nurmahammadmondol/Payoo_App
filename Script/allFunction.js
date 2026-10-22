function phoneNumber(id) {
  const number = document.getElementById(id);
  const findNumber = number.value;
  // console.log(findNumber)
  return findNumber;
}

function pinNumber(id) {
  const pin = document.getElementById(id);
  const findPin = pin.value;
  // console.log(findPin)
  return findPin;
}

function amount(id) {
  const amount = document.getElementById(id);
  const Amount = amount.value;
  // console.log(Amount)
  return Amount;
}

function selectItems(id) {
  const select = document.getElementById(id);
  const Bank = select.value;
  return Bank;
}

function handleButton(id) {
  document.getElementById("addMoneyFrom").classList.add("hidden");
  document.getElementById("cashOutFrom").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

