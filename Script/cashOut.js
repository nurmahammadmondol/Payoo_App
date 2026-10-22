

document.getElementById("CashOutMoney").addEventListener("click", function () {
  const MainBalance = document.getElementById("balance");
  const carenctBalance = MainBalance.innerText;
  const Balance = parseInt(carenctBalance);

  const Number = phoneNumber("agentNumber");
  const Pin = pinNumber("pinNumber");
  const Amount = parseInt(amount("amount"));

  if (11 !== Number.length) {
    alert("invalid number");
    return;
  } else if (Pin !== "1234") {
    alert("pin not mach");
    return;
  } else if (Amount > Balance) {
    alert("Your balance is low");
    return;
  } else {
    const cashOutAmount = Balance - Amount;
    document.getElementById("my_modal_2").showModal();
    //  console.log(cashOutAmount)
    MainBalance.innerText = cashOutAmount;

    // Clear all input fields
    document.getElementById("agentNumber").value = "";
    document.getElementById("pinNumber").value = "";
    document.getElementById("amount").value = "";
  }
});
