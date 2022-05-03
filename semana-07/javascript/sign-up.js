window.onload = function (){
        
    var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q',
    'r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
    'M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var number = ['0','1','2','3','4','5','6','7','8','9'];
    var symbol = ['!','$','%','/','(','=',')','_','-','>','<','*','+','?','¿','|','°',];
    var lettersNum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q',
    'r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
    'M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];

    //name validation
  
    var firstName = document.getElementById ('name');
    var errorName = document.getElementsByClassName ('error-name');
    var firstNameValid = false;
  
    firstName.addEventListener('blur', nameBlur);
    firstName.addEventListener('focus', nameFocus);
    
    function nameBlur() {
        for (i=0; i<firstName.value.length; i++) {
            if (!letters.includes(firstName.value[i])) {
            errorName[0].textContent = 'Please enter a valid name';
            firstNameValid = false;
            }
        }        
        if (firstName.value === '') {
            errorName[0].textContent = 'Please enter a name';
            firstNameValid = false;
        }
        else if (firstName.value.length < 3) {
            errorName[0].textContent = 'Is to short';
            firstNameValid = false;                
        }
    }

    function nameFocus() {
        errorName[0].textContent = '';
        firstNameValid = true;
    }

    //LastName validation

    var lastName = document.getElementById('last-name')
    var errorLastname = document.getElementsByClassName ('error-lastname');
    var lastNameValid = false;
  
    lastName.addEventListener('blur', lastNameBlur);
    lastName.addEventListener('focus', lastNameFocus);
    
    function lastNameBlur() {
      for (i=0; i<lastName.value.length; i++) {
          if (!letters.includes(lastName.value[i])) {
              errorLastname[0].textContent = 'Please enter a valid last name';
              lastNameValid = false;
              }
          }
      if (lastName.value === '') {
          errorLastname[0].textContent = 'Please enter last name';
          lastNameValid = false;
      }
      else if (lastName.value.length < 3) {
          errorLastname[0].textContent = 'Is to short';
          lastNameValid = false;
      }
    }
    function lastNameFocus() {
        errorLastname[0].textContent = '';
        lastNameValid = true;
      }
        
    //dni validation

    var dni = document.getElementById ('dni');
    var errorDni = document.getElementsByClassName ('error-dni');
    var dniValid = false;
 
    dni.addEventListener('blur', dniBlur);
    dni.addEventListener('focus', dniFocus);
    
    function dniBlur() {
        if (dni.value == '') {
            errorDni[0].textContent = 'Please enter a dni';
            dniValid = false;
        }
        else if(isNaN(dni.value)){
            errorDni[0].textContent = 'Letters cannot be used';
            dniValid = false;
        }
        else if (dni.value.length < 7) {
            errorDni[0].textContent = 'the dni is to short';
            dniValid = false;
        }
    }

    function dniFocus() {
        errorDni[0].textContent = '';
        dniValid = true;
    }      
  
    //Date birth validation

    var birth = document.getElementById('birth-date')
    var errorDatebi = document.getElementsByClassName ('error-datebirth');
    var birthValid = false;
  
    birth.addEventListener('blur', dateBlur);
    birth.addEventListener('focus', dateFocus);
    
    function dateBlur() {
        if (birth.value === '') {
            errorDatebi[0].textContent = 'Please enter a date';
            birthValid = false;
        }
        else if (Date.parse(birth.value)>Date.now()) {
            errorDatebi[0].textContent = 'That date is not valid';
            birthValid = false;
        }

    }

    function dateFocus() {
        errorDatebi[0].textContent = '';
        birthValid = true;
    }

    // YYYY-MM-DD -> MM/DD/YYYY
    /* yyyy-mm-dd */
    /* 0123456789 */

    function fromYearMonthDayToMonthDayYear(date) {
        var year = date.substr(0, 4);
        var month = date.substr(5, 2);
        var day = date.substr(8, 2);
        var newDate = month.concat('/', day, '/', year)
      
        return newDate;
    }

    //Celphone validation

    var phone = document.getElementById('phone-number')
    var errorCel = document.getElementsByClassName ('error-cel');
    var phoneValid = false;

    phone.addEventListener('blur', celBlur);
    phone.addEventListener('focus', celFocus);
    
    function celBlur() {
        if (phone.value === '') {
            errorCel[0].textContent = 'Please enter your number';
            phoneValid = false;
        }
        else if (phone.value.length != 10) {
            errorCel[0].textContent = 'Enter a valid number';
            phoneValid = false;
        }
        else {
            for (i = 0; i < phone.value.length; i++) {
                if (!number.includes(phone.value[i])) {
                  errorCel[0].textContent = 'Enter only numbers';
                  phoneValid = false;
                }
            }
        }
    }

    function celFocus() {
        errorCel[0].textContent = '';
        phoneValid = true;
    }
   
    //Address validation

    var address = document.getElementById('address');
    var errorAddress = document.getElementsByClassName ('error-address');
    var addressValid = false;
  
    address.addEventListener('blur', addressBlur);
    address.addEventListener('focus', addressFocus);

    function addressBlur(){
        if(address.value == '' || address.value.length < 5){
            errorAddress[0].textContent = 'Please enter a valid Address';
            addressValid = false;
        } 
        else{
            var blank = address.value.indexOf(' ');
            if(!isNaN(address.value.substring(0, blank))){
                errorAddress[0].textContent = 'Addres start with a word';
                addressValid = false;
            } else if(isNaN(address.value.substring(blank+1))){
                errorAddress[0].textContent = 'Addres ends with a number';
                addressValid = false;
            }
        }
    }

    function addressFocus(){
        errorAddress[0].textContent = '';
        addressValid = true;
    }
  
    
    //Location validation

    var location = document.getElementById('location')
    var errorLocality = document.getElementsByClassName ('error-locality');
    var locationValid = false;
  
    location.addEventListener('blur', localBlur);
    location.addEventListener('focus', localFocus);
    
    function localBlur() {
        for (i = 0; i < location.value.length; i++) {
            if (!lettersNum.includes(location.value[i])) {
                errorLocality[0].textContent = 'Please enter a valid location';
                locationValid = false;
            }
        }
        if (location.value === '') {
            errorLocality[0].textContent = 'Please enter a location';
            locationValid = false;
        }
        else if (location.value.length < 4) {
            errorLocality[0].textContent = 'Please enter a valid address';
            locationValid = false;
        }
    }
    function localFocus() {
        errorLocality[0].textContent = '';
        locationValid = true;
      }
  
    //Postal Code validation
  
    var postal = document.getElementById('postal-code')
    var errorPostal = document.getElementsByClassName ('error-postal');
    var postalValid = false;
  
    postal.addEventListener('blur', postalBlur);
    postal.addEventListener('focus', postalFocus);
    
    function postalBlur() {
        if (postal.value === '') {
            errorPostal[0].textContent = 'Please enter a postal code';
            postalValid = false;
          }
        else if (postal.value.length < 4 || postal.value.length > 5) {
            errorPostal[0].textContent = 'that zip code does not exist';
            postalValid = false;
        }
        else {
            for (i = 0; i < postal.value.length; i++) {
                if (!number.includes(postal.value[i])) {
                    errorPostal[0].textContent = 'Please enter a valid postal code';
                    postalValid = false;
                }
            }
        }
    }

    function postalFocus() {
        errorPostal[0].textContent = '';
        postalValid = true;
    }

    //emial validation
  
    var email = document.getElementById ('email');
    var errorEmail = document.getElementsByClassName ('error-email');
    var emailValid = false;
  
    email.addEventListener('blur', emailBlur);
    email.addEventListener('focus', emailFocus);
  
    function emailBlur() {
        var typeEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
          if (email.value === '') {
              errorEmail[0].textContent = 'Please enter a email';
              emailValid = false;
          }
          else if (!typeEmail.test(email.value)) {
              errorEmail[0].textContent = 'Please enter a valid email';
              emailValid = false;
        }
    }

    function emailFocus() {
        errorEmail[0].textContent = '';
        emailValid = true;
    }
    
    /* Validate Password */

    var password = document.getElementById ('password');
    var errorPass = document.getElementsByClassName ('error-p1');
    var passwordValid = false;

    password.addEventListener('blur', passwordBlur);
    password.addEventListener('focus', passwordFocus);

    function passwordBlur(){
        if(password.value.length == 0){
            errorPass[0].textContent = 'Please enter a password';
            passwordValid = false;
        } 
        else if(password.value.length < 8){
            errorPass[0].textContent = 'Password is too short'; //si son menos de 8 tira error
            passwordValid = false;
        } 
        else{
            var contLetters = 0;
            var contNumbers = 0;
            for(var i = 0; i < password.value.length; i++){
                for(var j = 0; j < letters.length; j++){
                    if(password.value.charAt(i) == letters[j]){
                        contLetters += 1;
                    }
                }
                for(var j = 0; j < number.length; j++){
                    if(password.value.charAt(i) == number[j]){
                        contNumbers += 1;
                    }
                }
            }
        if(contLetters == 0 || contNumbers == 0){
                errorPass[0].textContent = 'Password needs numbers and letters';
                passwordValid = false;
        } 
        else if(contLetters + contNumbers !== password.value.length){
                errorPass[0].textContent = 'Password only accept numbers and letters';
                passwordValid = false;
            }
        }
    }

    function passwordFocus(){
        errorPass[0].textContent = '';
        passwordValid = true;
    }

    //Password2 validation

    var password2 = document.getElementById ('password2');
    var errorPass2= document.getElementsByClassName ('error-p2');
    var password2Valid = false;

    password2.addEventListener('blur', password2Blur);
    password2.addEventListener('focus', password2Focus);

    function password2Blur(){
        if(password2.value.length == 0){
            errorPass2[0].textContent = 'Please enter a password';
            password2Valid = false;
        } else if(password2.value !== password.value){
            errorPass2[0].textContent = 'The password are not the same';
            password2Valid = false;
        }
    }

    function password2Focus(){
        errorPass2[0].textContent = '';
        password2Valid = true;
    }

    /* final alert, API validation */

    var button = document.getElementById('button-create');

    button.addEventListener('click', submitClick);

    function submitClick(){
        if(firstNameValid && lastNameValid && dniValid && birthValid && phoneValid && addressValid && locationValid && postalValid && emailValid && password2Valid && passwordValid){
            var dataSend = `https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${firstName.value}&lastName=${lastName.value}&dni=${dni.value}&dob=${fromYearMonthDayToMonthDayYear(birth.value)}&phone=${phone.value}&address=${address.value}&city=${location.value}&zip=${postal.value}&email=${email.value}&password=${password.value}`;
            fetch(dataSend)
                .then(function(response) {
                    return response.json();
                })
                .then(function(responseJson) {
                        if(responseJson.success){
                        alert('Login Successfull \nFirstName:' + firstName.value + '\nLastName:' + lastName.value + '\nDNI:' + dni.value + '\nBirth:' + birth.value + '\nPhone:' + phone.value + '\nAddress:' + address.value + '\nLocation:' + location.value + '\nPostal Code:' + postal.value + '\nEmail:' + email.value + '\nPassword:' + password.value + '\nPassword2:' + password2.value + '\n' + responseJson.msg)
                    }
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
        else if(!firstNameValid){
            alert('Error: First Name incorrect \nFirst Name:' + firstName.value);
        }
        else if(!lastNameValid){
            alert('Error: Last Name incorrect \nLast Name:' + lastName.value);
        } 
        else if(!dniValid){
            alert('Error: DNI incorrect \nDNI:' + dni.value);
        } 
        else if(!birthValid){
            alert('Error: Date of Birth incorrect \nDate of birth:' + birth.value);
        } 
        else if(!phoneValid){
            alert('Error: Phone incorrect \nPhone:' + phone.value);
        } 
         else if(!locationValid){
            alert('Error: Location incorrect \nLocation:' + location.value);
        }
        else if(!addressValid){
            alert('Error: Address incorrect \nAddress:' + address.value);
        }
        else if(!postalValid){
            alert('Error: Postal Code incorrect \nPostal Code:' + postal.value);
        } 
        else if(!emailValid){
            alert('Error: Email incorrect \nEmail:' + email.value);
        } 
        else if(!passwordValid){
            alert('Error: Password incorrect \nPassword:' + password.value);
        } 
        else if(!password2Valid){
            alert('Error: Password2 incorrect \nPassword2:' + password2.value);
        }
    }




}