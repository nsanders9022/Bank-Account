// var deposit = 0;
// var withdrawl = 0;
// var initialDeposit = 0;

function Balances(initialDeposit, name1) {
  this.initialDeposit = initialDeposit;
  this.name1 = name;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
}

Balances.prototype.manipulate = function(initialDeposit, deposit, withdrawal) {
  if (deposit > 0) {
    this.initialDeposit += deposit;
  }
  if (withdrawal > 0) {
    this.initialDeposit = this.initialDeposit - withdrawal;
  }

  if (deposit === NaN) {
    this.deposit = 0;
  }

  if (withdrawal === NaN) {
    this.withdrawal = 0;
  }

  return this.initialDeposit;
}

$(function() {
  $("#bank").submit(function(event) {
    event.preventDefault();



    var initialDeposit = parseInt($("#initialDeposit").val());
    var name = $("#name").val();



    var obj = new Balances(initialDeposit, name);


    $("#initialDeposit").val("");
    $("#deposit").val("");
    $("#withdrawal").val("");

    $("#transactions").prepend("<li>" + obj.manipulate() + "</li>");
  })

  $("#math").submit(function(event) {
    event.preventDefault();

    var initialDeposit = parseInt($("#initialDeposit").val());
    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());

    var obj = new Balances(initialDeposit, name);

    obj.manipulate(initialDeposit, deposit,withdrawal)


  })
})
