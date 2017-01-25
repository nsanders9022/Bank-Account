var masterAccount

function Balances(userName, initialDeposit) {
  this.userName = userName;
  this.initialDeposit = initialDeposit;
}

Balances.prototype.depositMoney = function(deposit) {
    this.initialDeposit += deposit;
}

Balances.prototype.withdrawMoney = function(withdrawal) {
    this.initialDeposit -= withdrawal;
}

$(document).ready(function() {
  var initialDeposit;
  $("#bank").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    initialDeposit = parseInt($("#initialDeposit").val());

    masterAccount = new Balances(name, initialDeposit)

    $("#transactions").text("$"+masterAccount.initialDeposit)

    $("#initialDeposit").val("");
    $("#name").val("");

  })

  $("#math").submit(function(event) {
    event.preventDefault();
    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());

    if (deposit > 0) {
      masterAccount.depositMoney(deposit);
    }

    if (withdrawal > 0) {
      masterAccount.withdrawMoney(withdrawal);
    }

    $("#transactions").text("$"+masterAccount.initialDeposit);

    $("#deposit").val("");
    $("#withdrawal").val("");
  })


})
