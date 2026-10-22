
document
  .getElementById("addMoneyAccount")
  .addEventListener("click", function () {
    const MainBalance = document.getElementById("balance");
    const carenctBalance = MainBalance.innerText;
    const Balance = parseInt(carenctBalance);

    const Bank = selectItems("selectBank");
    const Number = phoneNumber("addAccountNumber");
    const Pin = pinNumber("addPinNumber");
    const Amount = parseInt(amount("addAmount"));

    if (11 !== Number.length) {
      alert("invalid number");
      return;
    } else if (Pin !== "1234") {
      alert("pin not mach");
      return;
    } else {
      const addMoney = Balance + Amount;
      document.getElementById("my_modal_1").showModal();
      MainBalance.innerText = addMoney;

      // Clear all input fields
      document.getElementById("selectBank").value = "";
      document.getElementById("addAccountNumber").value = "";
      document.getElementById("addPinNumber").value = "";
      document.getElementById("addAmount").value = "";
    }
  });
