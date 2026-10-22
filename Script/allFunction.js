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

function handleButton(id, id2) {
  document.getElementById("addMoneyFrom").classList.add("hidden");
  document.getElementById("cashOutFrom").classList.add("hidden");

  document.getElementById("addMoney").classList.remove("text-[#0874F2]");
  document.getElementById("cashOut").classList.remove("text-[#0874F2]");
  document.getElementById("transferMoney").classList.remove("text-[#0874F2]");
  document.getElementById("getBonus").classList.remove("text-[#0874F2]");
  document.getElementById("payBill").classList.remove("text-[#0874F2]");
  document.getElementById("Transactions").classList.remove("text-[#0874F2]");

  document.getElementById(id).classList.remove("hidden");
  document.getElementById(id2).classList.add('text-[#0874F2]');
  
  
}

