document.getElementById('Login-button').addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pin = document.getElementById('pin').value;
   
    if(phoneNumber === '01953395475' && pin==='1234'){
        alert("login successful");
        window.location.href='./home.html'
    }
    else{
        console.log("login failed");
    }
})