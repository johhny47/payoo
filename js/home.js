// add money form //
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const currentAmount = document.getElementById('current-amount').innerText;
    const numberAmount=parseInt(currentAmount);
    const addAmount = document.getElementById('add-amount').value;
    document.getElementById('add-amount').value = ""
    const numberaddAmount=parseInt(addAmount);
    const moneyAddPin = document.getElementById('money-add-pin').value;
    document.getElementById('money-add-pin').value = ""
    if(moneyAddPin ==='1234'){
        const newAmount = numberAmount + numberaddAmount;
        document.getElementById('current-amount').innerText = newAmount;

    }
    else{
        alert("worng pin");
    }
})

// cashout money form //
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const currentAmount = document.getElementById('current-amount').innerText;
    const numberAmount=parseInt(currentAmount);
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    document.getElementById('cash-out-amount').value = ""
    const numbercashOutAmount=parseInt(cashOutAmount);
    const cashOutPin = document.getElementById('cash-out-pin').value;
    document.getElementById('cash-out-pin').value = ""
   
    if(cashOutPin==='1234'){
        const newcashOutAmount = numberAmount -  numbercashOutAmount;
        document.getElementById('current-amount').innerText = newcashOutAmount;

    }
    else{
        alert("worng pin");
    }
})

// feature 
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault();
 document.getElementById('cash-out-form').classList.remove('hidden');
 document.getElementById('add-money-form').classList.add('hidden');

}
);
document.getElementById('add-money-btn').addEventListener('click', function(event){
    event.preventDefault();
 document.getElementById('add-money-form').classList.remove('hidden');
 document.getElementById('cash-out-form').classList.add('hidden');
 

}
);


