let nameError = document.getElementById("name-error")
let phoneError = document.getElementById("phone-error")
let emailError = document.getElementById("email-error")
let messageError = document.getElementById("message-error")
let submitError = document.getElementById("submit-error")

function validateName(){
    let name = document.getElementById("contect-name").value;
    if(name.length == 0){
        nameError.innerHTML = "Name is required!"
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
         nameError.innerHTML = "Write your full name";
         return false;
    }
    nameError.innerHTML=`<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validatePhoneNo(){
    let PhoneNo = document.getElementById("contect-phone").value;
    if(PhoneNo.length == 0){
        phoneError.innerHTML= "Phone no. is required";
        return false;
    }
    if(PhoneNo.length !== 10){
        phoneError.innerHTML= "Phone no. should be 10 digits";
        return false;
    }
    if(!PhoneNo.match(/^[0-9]{10}$/)){
        phoneError.innerHTML= "Only digit please.";
        return false;
    }
    phoneError.innerHTML =`<i class="fa-solid fa-circle-check"></i>`;
    return true;

}

function validateEmail(){
    let Email = document.getElementById("contect-email").value;
  if(Email.length ==0){
    emailError.innerHTML = "Email is required";
    return false;
  }
  if(!Email.match(/^[A-Za-z\.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = "Invalid Email";
    return false;
  }

  emailError.innerHTML =`<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateMessage(){
    let Message = document.getElementById("contect-message").value;
    let required = 30 ;
    let left = required - Message.length
    if(left>0){
        messageError.innerHTML = left + "more characters required";
        return false;
    }
    messageError.innerHTML =`<i class="fa-solid fa-circle-check"></i>`;
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhoneNo() || !validateEmail() ||!validateMessage()){
        submitError.style.display = "block"
        submitError.innerHTML= "Please fix the errors to submit"
        setTimeout(function(){
            submitError.style.display = "none" 
        },3000)
        return false;
    }
} 