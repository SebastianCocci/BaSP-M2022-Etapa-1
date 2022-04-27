window.onload = function (){
        
        var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q',
        'r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
        'M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        var number = ['0','1','2','3','4','5','6','7','8','9']
        var symbol = ['!','$','%','/','(','=',')','_','-','>','<','*','+','?','¿','|','°',]
        var lettersNum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q',
        'r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L',
        'M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9']

        //name validation
      
        var name = document.getElementById ('name');
        var errorName = document.getElementsByClassName ('error-name');
      
        name.addEventListener('blur', nameBlur);
        name.addEventListener('focus', nameFocus);
        
        function nameBlur() {
            for (i=0; i<name.value.length; i++) {
              if (!letters.includes(name.value[i])) {
                errorName[0].textContent = 'Please enter a valid name';
              }
            }
            if (name.value === '') {
                errorName[0].textContent = 'Please enter a name';
            }
            else if (name.value.length < 3) {
                errorName[0].textContent = 'Pleasae enter a valid name';
                
            }
        }
        function nameFocus() {
            errorName[0].textContent = '';
        }
      
        //LastName validation
      
        var lastName = document.getElementById('last-name')
        var errorLastname = document.getElementsByClassName ('error-lastname');
      
        lastName.addEventListener('blur', lastNameBlur);
        lastName.addEventListener('focus', lastNameFocus);
        
        function lastNameBlur() {
          for (i=0; i<lastName.value.length; i++) {
              if (!letters.includes(lastName.value[i])) {
                  errorLastname[0].textContent = 'Please enter a valid last name';
                  }
              }
          if (lastName.value === '') {
              errorLastname[0].textContent = 'Please enter last name';
          }
          else if (lastName.value.length < 3) {
              errorLastname[0].textContent = 'Please enter a valid last name';
          }
        }
        function lastNameFocus() {
            errorLastname[0].textContent = '';
          }
            
        //dni validation
      
        var dni = document.getElementById ('dni');
        var errorDni = document.getElementsByClassName ('error-dni');
      
        dni.addEventListener('blur', dniBlur);
        dni.addEventListener('focus', dniFocus);
        
        function dniBlur() {
            if (dni.value == '') {
                errorDni[0].textContent = 'Please enter a dni';
            }
            else if(isNaN(dni.value)){
                span[0].textContent = 'It cant have letters';
                dniValid = false;
            }
            else if (dni.value.length < 7) {
                errorDni[0].textContent = 'the dni is to short';
            }
        }
        function dniFocus() {
            errorDni[0].textContent = '';
        }
      
      
        //Date birth validation
      
        var birthDate = document.getElementById('birth-date')
        var errorDatebi = document.getElementsByClassName ('error-datebirth');
      
        birthDate.addEventListener('blur', dateBlur);
        birthDate.addEventListener('focus', dateFocus);
        
        function dateBlur() {
            if (dateBi.value === '') {
                errorDatebi[0].textContent = 'Please enter a date';
            }
            else if (Date.parse(dateBi.value)>Date.now()) {
                errorDatebi[0].textContent = 'That date is not valid';
            }
        }
        function dateFocus() {
            errorDatebi[0].textContent = '';
        }
       
      
    //Celphone validation
      
        var phone = document.getElementById('phone-number')
        var errorCel = document.getElementsByClassName ('error-cel');
      
        phone.addEventListener('blur', celBlur);
        phone.addEventListener('focus', celFocus);
        
          function celBlur() {
              if (phone.value === '') {
                  errorCel[0].textContent = 'Please enter your number';
              }
              else if (phone.value.length != 10) {
                  errorCel[0].textContent = 'Enter a valid number';
              }
              else {
                  for (i = 0; i < phone.value.length; i++) {
                      if (!number.includes(phone.value[i])) {
                          errorCel[0].textContent = 'Enter only numbers';
                      }
                  }
              }
          }
          function celFocus() {
              errorCel[0].textContent = '';
          }
       
    //Address validation
      
        var address = document.getElementById('address')
        var errorAddress = document.getElementsByClassName ('error-address');
      
        address.addEventListener('blur', addressBlur);
        address.addEventListener('focus', addressFocus);
        
          function addressBlur() {
              let validateAddress = address.value.split(' ');
              if (address.value === '') {
                  errorAddress[0].textContent = 'Please enter an address';
              }
              else if (validateAddress[0].length < 5) {
                  errorAddress[0].textContent = 'Please enter a valid address';
              }
              else {
                  for (i = 0; i < validateAddress[0].length; i++) {
                      if (!letters.includes(validateAddress[0][i])) {
                          errorAddress[0].textContent = 'Please enter a valid address';
                      }
                  }
                  if (validateAddress[1]) {
                      for (i = 0; i < validateAddress[1].length; i++) {
                          if (!number.includes(validateAddress[1][i])) {
                              errorAddress[0].textContent = 'Please enter a valid address';
                          }
                      }
                  }
                  else {
                      errorAddress[0].textContent = 'Please enter a valid address';
                  }
              }
          }
      
        function addressFocus() {
            errorAddress[0].textContent = '';
        }
      
        
    //Location validation
      
        var location = document.getElementById('location')
        var errorLocality = document.getElementsByClassName ('error-locality');
      
        location.addEventListener('blur', localBlur);
        location.addEventListener('focus', localFocus);
        
          function localBlur() {
              for (i = 0; i < location.value.length; i++) {
                  if (!lettersNum.includes(location.value[i])) {
                      errorLocality[0].textContent = 'Please enter a valid location';
                  }
              }
              if (location.value === '') {
                  errorLocality[0].textContent = 'Please enter a location';
              }
              else if (location.value.length < 4) {
                  errorLocality[0].textContent = 'Please enter a valid address';
              }
          }
          function localFocus() {
              errorLocality[0].textContent = '';
          }
      
        //Postal Code validation
      
        var postal = document.getElementById('postal-code')
        var errorPostal = document.getElementsByClassName ('error-postal');
      
        postal.addEventListener('blur', postalBlur);
        postal.addEventListener('focus', postalFocus);
        
        function postalBlur() {
              if (postal.value === '') {
                  errorPostal[0].textContent = 'Please enter a postal code';
              }
              else if (postal.value.length < 4 || postal.value.length > 5) {
                  errorPostal[0].textContent = 'Postal code is too short';
              }
              else {
                  for (i = 0; i < postal.value.length; i++) {
                      if (!number.includes(postal.value[i])) {
                          errorPostal[0].textContent = 'Please enter a valid postal code';
                      }
                  }
              }
          }
          function postalFocus() {
              errorPostal[0].textContent = '';
          }
      
      
        //emial validation
      
          var email = document.getElementById ('email');
          var errorEmail = document.getElementsByClassName ('error-email');
      
          email.addEventListener('blur', emailBlur);
          email.addEventListener('focus', emailFocus);
      
          function emailBlur() {
              var validEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
              if (email.value === '') {
                  errorEmail[0].textContent = 'Please enter a email';
              }
              else if (!validEmail.test(email.value)) {
                  errorEmail[0].textContent = 'Please enter a valid email';
              }
          }
          function emailFocus() {
              errorEmail[0].textContent = '';
          }
        
        /* Validate Password */
          
        var password = document.getElementById ('password');
        var errorPass = document.getElementsByClassName ('error-p1');

        password.addEventListener('blur', passwordBlur);
        password.addEventListener('focus', passwordFocus);

        function passwordBlur(){
            if(password.value.length == 0){
                errorPass[0].textContent = 'Please enter a password';
                passwordValid = false;
            } else if(password.value.length < 8){
                errorPass[0].textContent = 'Password is too short'; //si son menos de 8 tira error
                passwordValid = false;
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
                    passwordValid = false;
                } else if(contLetters + contNumbers !== password.value.length){
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

        password2.addEventListener('blur', password2Blur);
        password2.addEventListener('focus', password2Focus);

        function password2Blur(){
            if(password2.value.length == 0){
                errorPass2[0].textContent = 'Please enter a password';
                password2Valid = false;
            } else if(password2.value.length < 8){
                errorPass2[0].textContent = 'Password is too short'; //si son menos de 8 tira error
                password2Valid = false;
            } else{
                var contLetters = 0;
                var contNumbers = 0;
                for(var i = 0; i < password2.value.length; i++){
                    for(var j = 0; j < letters.length; j++){
                        if(password2.value.charAt(i) == letters[j]){
                            contLetters += 1;
                        }
                    }
                    for(var j = 0; j < number.length; j++){
                        if(password2.value.charAt(i) == number[j]){
                            contNumbers += 1;
                        }
                    }
                }
                if(contLetters == 0 || contNumbers == 0){
                    errorPass2[0].textContent = 'Password needs numbers and letters';
                    password2Valid = false;
                } else if(contLetters + contNumbers !== password2.value.length){
                    rrorPass2[0].textContent = 'Password only accept numbers and letters';
                    password2Valid = false;
                }
            }
        }

        function password2Focus(){
            errorPass2[0].textContent = '';
            password2Valid = true;
        }


          document.getElementById ('button-create').onclick = function () {
            if (errorName[0], errorLastname[0], errorDatebi [0], errorDni [0],
                errorCel [0], errorLocality[0], errorAddress[0], errorPostal[0],
                errorEmail[0], errorPassword[0], errorPassword2[0]) {
                alert ('created your user');
            }
        }



}