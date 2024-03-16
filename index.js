
const account = {
    account_no : '123456789',
    pin : '1234',
    balance : 100000
};

function button(){
    const enteredAccountNo = document.querySelector('.account').value;
    const enteredPin = document.querySelector('.pi').value;

    if (enteredAccountNo === account.account_no && enteredPin === account.pin){
        document.getElementById('login').style.display = 'none';
        document.getElementById('menu').style.display = 'block';
    }
}

function balEnquirey(){
    document.getElementById('Bl').innerText = 'Balance: ' + account.balance;
    document.getElementById('Bal').style.display='block';
    document.getElementById('Bl').style.display='block';
    document.getElementById('menu').style.display = 'none';
    document.getElementById('login').style.display = 'none';
}

function withdraw(){
    const amount = parseFloat(prompt('Enter Amount: '));
    if(amount>0 && amount<= account.balance){
        account.balance -= amount;
        document.getElementById('withdraw').innerText = 'Withdrawal Successful. New Balance: '+account.balance;
        document.getElementById('withdraw').style.display='block';
        document.getElementById('Bal').style.display='none';
        document.getElementById('menu').style.display='none';
    } 
    else{
        document.getElementById('withdraw').innerText = 'Balance Low';
    }
    
}

function Buttn(btnNo){

    let currentContent = document.getElementById('floatingInput').innerText;
    document.getElementById('floatingInput').innerText=currentContent+btnNo;

}