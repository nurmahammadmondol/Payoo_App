

document.getElementById('btnLogin').addEventListener('click', function(){

    const Number=document.getElementById('mobileNumber');
    const mobileNumber=Number.value;
    const pin=document.getElementById('pinNumber');
    const pinNumber=pin.value;

    if(mobileNumber === '01234567890' && pinNumber === '1234'){
        console.log('success login')
        window.location.href = 'home.html';
    }
    else{
        alert('Mobile Number & Pin Number is invalid')
        console.log('error')
    }

   
   
})