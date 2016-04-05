function Accounts(name, deposit){
  this.name = name;
  this.deposit = deposit;
}

Accounts.prototype.depositWhitdraw = function () {
  var depositAmount = parseInt($("#deposit").val());
  var whitdrawAmount = parseInt($("#whitdraw").val());
  userAccount.deposit = userAccount.deposit - whitdrawAmount + depositAmount;
  $("#userNameOutput2").text(userAccount.deposit);
  $("#output2").text(userAccount.deposit);
  $("#userNameOutput2").text(userAccount.name);
  $(".output2").show();
};


$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $(".depositAndWhitdraw").show();
    userName = $("#inputName").val();
    account = parseInt($("#initialDepositInput").val());
    userAccount = new Accounts (userName, account);
    $("#output").text(userAccount.deposit);
    $("#userNameOutput").text(userAccount.name);
    $(".output").show();
  })
  $("#submitWhitdrawDeposit").click(function(){
    userAccount.depositWhitdraw();
  });
});
