window.onload = function(){
    var form = document.getElementsByClassName('login-box')
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var button = document.getElementById('login')
    var span = document.getElementsByClassName('wrong')

/* Email validation. */

    email.addEventListener('blur', emailBlur);
    email.addEventListener('focus', emailFocus);

    function emailBlur(){
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(email.value === ''){
            span[0].textContent = 'Please enter email';
        }
        else if (!regexEmail.test(email.value)){
            span[0].textContent = 'Please enter a valid email';
        }
    }
    function emailFocus(){
        span[0].textContent = '';
    }

/* Password validation. */

password.addEventListener('blur', passBlur);
password.addEventListener('focus', passFocus);

function passBlur(){
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    var numbers = [0,1,2,3,4,5,6,7,8,9]
}
if 


}
