window.onload = function(){    

    /* Email validation. */

    var email = document.getElementById('email')
    var errorEmail = document.getElementsByClassName('wrong');
    var emailValidated = false; /* para el alert del final */

    email.addEventListener('blur', emailBlur);
    email.addEventListener('focus', emailFocus);
    

    function emailBlur(){
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.value === ''){
            errorEmail[0].textContent = 'Please enter email';
        }
        else if (!regexEmail.test(email.value)){
            errorEmail[0].textContent = 'Please enter a valid email';
        }
        else{
            emailValidated = true;
        }
    }
    function emailFocus(){
        errorEmail[0].textContent = '';
    }

//Password Validation
    
    var password = document.getElementById('password');
    var errorPass = document.getElementsByClassName('wrongpass');
    var passwordValidated = false; //alerta final

    password.addEventListener('blur', passwordBlur);
    password.addEventListener('focus', passwordFocus);

    function passwordBlur(){
        var alphabet = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        if(password.value.length == 0){
            errorPass[0].textContent = 'Please enter a password';
        } else if(password.value.length < 8){
            errorPass[0].textContent = 'Password is too short'; //si son menos de 8 tira error
        } else{
            var contLetters = 0;
            var contNumbers = 0;
            for(var i = 0; i < password.value.length; i++){
                for(var j = 0; j < alphabet.length; j++){
                    if(password.value.charAt(i) == alphabet[j]){
                        contLetters += 1;
                    }
                }
                for(var j = 0; j < numbers.length; j++){
                    if(password.value.charAt(i) == numbers[j]){
                        contNumbers += 1;
                    }
                }
            }
            if(contLetters == 0 || contNumbers == 0){
                errorPass[0].textContent = 'Password needs numbers and letters';
            } else if(contLetters + contNumbers !== password.value.length){
                errorPass[0].textContent = 'Password only accept numbers and letters';
            }
            else{
                passwordValidated = true;
            }
        }
    }

    function passwordFocus(){
        errorPass[0].textContent = '';
        }

    /* final alert */

    var button = document.getElementById('button-create')

    button.addEventListener('click', submitClick);

    function submitClick(){

        if(emailValidated && passwordValidated){
            const dataSend = `https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${password.value}`;
            fetch(dataSend)
                .then(function(response) {
                    console.log(response);
                    return response.json();
                })
                .then(function(responseJson) {
                    if(responseJson.success){
                        alert('Login successfull\n Email: ' + email.value + '\nPassword: ' + password.value);
                    } else{
                        throw new Error('salio mal');
                    }
                })
                .catch(function(error) {
                    alert('Error');
                });
        } 
        else if(!emailValidated && !passwordValidated){
            alert('Error: Email and password incorrect \nemail:' + email.value + '\npassword:' + password.value);
        } 
        else if(!emailValidated){
            alert('Error: Email incorrect \nemail:' + email.value + '\npassword:' + password.value);
        } 
        else{
            alert('Error: Password incorrect \nemail:' + email.value + '\npassword:' + password.value);
        }
    }
    
}