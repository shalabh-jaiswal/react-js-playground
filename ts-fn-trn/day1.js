var _this = this;
{
    var trn1 = { description: 'trn 1', amount: 100, date: new Date };
    var trn2 = { description: 'trn 1', amount: 100, date: new Date };
    var trnArray = [trn1, trn2];
    console.log(trnArray);
    var newTransaction = function () {
        var newDescriptionInput = document.getElementById('description');
        var newAmountInput = document.getElementById('amount');
        var newDescription = newDescriptionInput.value;
        var newAmount = Number(newAmountInput.value);
        console.log(document.getElementById('amount').value);
        var trn3 = { description: newDescription, amount: newAmount, date: new Date };
        _this.trnArray.push(trn3);
        console.log(_this.trnArray);
    };
}
