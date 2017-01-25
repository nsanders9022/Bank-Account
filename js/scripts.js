var masterAccount

function Balances(initialDeposit, name1) {
  this.initialDeposit = initialDeposit;
  this.name1 = name1;
}

Balances.prototype.addMoney = function() {
    this.initialDeposit += deposit;
}

Balances.prototype.subtractMoney = function() {
    this.initialDeposit -= withdrawal;
}

$(function() {
  $("#bank").submit(function(event) {
    event.preventDefault();

    var name = $("#name").val();
    var initialDeposit = parseInt($("#initialDeposit").val());

    masterAccount = new Balances(initialDeposit, name)

    $("#transactions").text(masterAccount.initialDeposit)

    $("#initialDeposit").val("");
    $("#name").val("");

  })

  $("#math").submit(function(event) {
    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());

    if (deposit > 0) {
      masterAccount.addMoney();
    }

    if (withdrawal > 0) {
      masterAccount.subtractMoney();
    }

    $("#transactions").text(masterAccount.initialDeposit);
  })


})
