const submitBtn = document.querySelector('#submitBtn');
const firstNameError= document.querySelector('.firstname-error');
const lastNameError= document.querySelector('.lastname-error');
const emailError= document.querySelector('.email-error');
const queryError= document.querySelector('.query-error');
const messageError = document.querySelector('.message-error');
const consentError= document.querySelector('.consent-error');
const successHidden = document.querySelector('.success-hidden');

submitBtn.addEventListener('click', function(e) {
   e.preventDefault();

   let firstName = document.querySelector('.firstname').value.trim();
   let lastName = document.querySelector('.lastname').value.trim();
   let email = document.querySelector('.email-input').value.trim();
   let queryType = document.querySelector("input[name='queryType']:checked");
   let textArea = document.querySelector('#messages').value.trim();
   let consent = document.querySelector("input[type = 'checkbox']").checked;

   let errors = [];

   if(!firstName) {
      errors.push(firstNameError);
   }

   if(!lastName) {
      errors.push(lastNameError);
   }

   if(!email || !/^[^@]+@[^@]+\.+[^@]+$/.test(email)) {
      errors.push(emailError);
   }

   if(!queryType) {
      errors.push(queryError);
   }

   if(!textArea) {
      errors.push(messageError);
   }

   if(!consent) {
      errors.push(consentError);
   }

   if(errors.length > 0) {
      for(let i = 0; i < errors.length; i++) {
         errors[i].style.display = 'block';
      }
   }else {
      successHidden.classList.add('show');
      document.querySelector('#myForm').reset();

      setTimeout(() => {
         successHidden.classList.remove('show');
         successHidden.classList.add('hide');

         setTimeout(() => {
            successHidden.style.display = 'none';
            successHidden.classList.remove('hide');
         }, 600); // matches fade-out duration
      }, 2000); // how long it stays visible before disappearing — adjust as you like
   }
});

