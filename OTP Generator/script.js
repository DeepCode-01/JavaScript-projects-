 function sendOTP (){

    const email = document.getElementById("email")
    const verify = document.getElementsByClassName("otpverify")

    let otp_val = Math.floor(Math.random()*10000)
    let emailBody = `<h2> Your OTP is ${otp_val}</h2>`

  Email.send({
    SecureToken : " b4338a69-10ca-4084-b051-ce181c23172d",
    To :  email.value,
    From : "dv292901@gmail.com",
    Subject : "Email OTP using Javascript",
    Body : emailBody
}).then(
  message =>{
    if(message === "Ok"){
        alert("OTP sent to your email" + email.value);
        verify.style.display = "flex"

        const otp_in = document.getElementById("otp-in");
        const otp_btn = document.getElementById("otp-btn")

        otp_btn.addEventListener("click", ()=>{
            if(otp_in.value == otp_val){
                alert("Email address varified..")
            }
            else{
                alert("Invalid OTP")
            }
        })
    }
  }
);
}
