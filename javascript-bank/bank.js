/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0) {
    var newAcctObj = new Account(this.nextAccountNumber, holder);
    newAcctObj.deposit(balance);
    this.accounts.push(newAcctObj);
    this.nextAccountNumber++;

  } else {
    return null;
  }
  return newAcctObj.number;

};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var grandTotal = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    grandTotal += this.accounts[i].getBalance();
  }
  return grandTotal;
};
