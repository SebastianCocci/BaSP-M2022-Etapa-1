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
                errorName[0].textContent = 'only letters';
              }
            }
            if (name.value === '') {
                errorName[0].textContent = 'please enter your name';
            }
            else if (name.value.length < 3) {
                errorName[0].textContent = 'only letters and 3 or more';
                
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
                  errorLastname[0].textContent = 'only letters';
                  }
              }
          if (lastName.value === '') {
              errorLastname[0].textContent = 'please enter your name';
          }
          else if (lastName.value.length < 3) {
              errorLastname[0].textContent = 'only letters and 3 or more';
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
              if (dni.value === '') {
                  errorDni[0].textContent = 'please enter your D.N.I';
              }
              else if (dni.value.length < 7) {
                  errorDni[0].textContent = 'mayor a 7 and only numbers';
              }
              else {
                  for (i = 0; i < dni.value.length; i++) {
                      if (!number.includes(dni.value[i])) {
                          errorDni[0].textContent = 'only numbers';
                      }
                  }
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
                errorDatebi[0].textContent = 'please enter your date of birth';
            }
            else if (Date.parse(dateBi.value)>Date.now()) {
                errorDatebi[0].textContent = 'its no true';
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
                  errorCel[0].textContent = 'please enter your Celphone';
              }
              else if (phone.value.length != 10) {
                  errorCel[0].textContent = 'only 10 numbers';
              }
              else {
                  for (i = 0; i < phone.value.length; i++) {
                      if (!number.includes(phone.value[i])) {
                          errorCel[0].textContent = 'only 10 numbers';
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
                  errorAddress[0].textContent = 'please enter your address';
              }
              else if (validateAddress[0].length < 5) {
                  errorAddress[0].textContent = 'mayor a 7 and only numbers';
              }
              else {
                  for (i = 0; i < validateAddress[0].length; i++) {
                      if (!letters.includes(validateAddress[0][i])) {
                          errorAddress[0].textContent = 'First lettes';
                      }
                  }
                  if (validateAddress[1]) {
                      for (i = 0; i < validateAddress[1].length; i++) {
                          if (!number.includes(validateAddress[1][i])) {
                              errorAddress[0].textContent = 'only numbers';
                          }
                      }
                  }
                  else {
                      errorAddress[0].textContent = 'letters y numeros';
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
                      errorLocality[0].textContent = 'Text Alfanumerico';
                  }
              }
              if (location.value === '') {
                  errorLocality[0].textContent = 'please enter your location';
              }
              else if (location.value.length < 4) {
                  errorLocality[0].textContent = '3 or more caracters';
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
                  errorPostal[0].textContent = 'please enter your postal code';
              }
              else if (postal.value.length < 4 || postal.value.length > 5) {
                  errorPostal[0].textContent = '4 or 5 numbers';
              }
              else {
                  for (i = 0; i < postal.value.length; i++) {
                      if (!number.includes(postal.value[i])) {
                          errorPostal[0].textContent = 'only numbers';
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
                  errorEmail[0].textContent = 'please enter a email';
              }
              else if (!validEmail.test(email.value)) {
                  errorEmail[0].textContent = 'please enter a valid email';
              }
          }
          function emailFocus() {
              errorEmail[0].textContent = '';
          }
      
          //password validation
      /* 
          var password = document.getElementById ('password');
          var errorPassword = document.getElementsByClassName ('error-password')
      
          password.addEventListener('blur', passwordBlur);
          password.addEventListener('focus', passwordFocus);
      
          function passwordBlur() {
              for (i = 0; i < password.value.length; i++) {
                  if (!lettersNum.includes(password.value[i])) {
                      errorPassword[0].textContent = 'Text Alfanumerico and no space';
                  }
              }
              if (password.value === '') {
                  errorPassword[0].textContent = 'please enter your location';
              }
              else if (password.value.length < 4) {
                  errorPassword[0].textContent = '3 or more caracters';
              }
          }
          function passwordFocus() {
              errorPassword[0].textContent = '';
          }
      
          //password validation2
      
          var password = document.getElementById ('password');
          var errorPassword = document.getElementsByClassName ('error-password')
      
          password.addEventListener('blur', passwordBlur);
          password.addEventListener('focus', passwordFocus);
      
          function passwordBlur() {
              var validPassword = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
              if (password.value === '') {
                  errorPassword[0].textContent = 'please enter a passwprd';
              }
              else if (!validPassword.test(password.value)) {
                  errorPassword[0].textContent = 'please enter a valid password';
              }
          }
          function passwordFocus() {
              errorPassword[0].textContent = '';
          } */





}
