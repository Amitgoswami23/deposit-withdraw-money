//handle deposite button and withdraw button
document.getElementById('deposit-button').addEventListener('click', function(){
    //get amount diposit
    const dipositInput = document.getElementById('deposit-input');
    const NewdipositeAmount = parseFloat(dipositInput.value);
    console.log(NewdipositeAmount);

    const dipositTotal = document.getElementById('diposit-total');
    console.log(dipositTotal.innerText);

    const PreviousDepositAmount = dipositTotal.innerText;
    const NewDepositTotal = parseFloat(PreviousDepositAmount) + parseFloat(NewdipositeAmount);
    console.log(NewDepositTotal);

    dipositTotal.innerText = NewDepositTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    console.log(balanceTotalText);
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const NewBalanceTotal = previousBalanceTotal + NewdipositeAmount;
    console.log(NewBalanceTotal);

    balanceTotal.innerText = NewBalanceTotal;

    //clear the input
    dipositInput.value = '';
})



//withdraw functionality
document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrowInput = document.getElementById('Withdraw-input');
    const NewWithdrowInput = parseFloat(withdrowInput.value);
    console.log(NewWithdrowInput);

    const WithdrowTotal = document.getElementById('withdraw-total');
    console.log(WithdrowTotal.innerText);


    const PreviousWithdrawAmount = WithdrowTotal.innerText;
    const NewWithdrawAmount = parseFloat(PreviousWithdrawAmount) + NewWithdrowInput;

    WithdrowTotal.innerText = NewWithdrawAmount;

    //update the Total balance
    const withdrawtotalBalance = document.getElementById('balance-total');
    const withdrawtotalBalanceText = withdrawtotalBalance.innerText;
    console.log(withdrawtotalBalanceText);

    const withdrawPreviousBalanceTotal = parseFloat(withdrawtotalBalanceText);
    const withdrawNewBalanceTotal = withdrawPreviousBalanceTotal - NewWithdrowInput;
    withdrawtotalBalance.innerText = withdrawNewBalanceTotal;
    
    //clear the input field
    withdrowInput.value = '';
})