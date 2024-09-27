function sendOTP() {
  const email = document.getElementById("email");
  const verify = document.getElementsByClassName("otpverify");

  // Validate email input
  if (!email.value) {
    alert("Please enter a valid email address.");
    return;
  }

  let otp_val = Math.floor(Math.random() * 10000); 
  let emailBody = `<h2>Your OTP is: ${otp_val}</h2>`;

  Email.send({
    SecureToken: "56b796d5-4772-422d-920d-33439f273c94",
    To: email.value,
    From: 'dv292901@gmail.com',
    Subject: "Email OTP using JavaScript",
    Body: emailBody
  }).then(message => {
    console.log("Email sending response: ", message);  // Log the response for debugging
    
    if (message.toLowerCase() === "ok") {
      alert("OTP sent to your email: " + email.value);
      verify[0].style.display = "flex";
  
      const otp_in = document.getElementById("otp-in");
      const otp_btn = document.getElementById("otp-btn");
  
      otp_btn.addEventListener("click", () => {
        if (otp_in.value == otp_val) {
          alert("Email address verified.");
        } else {
          alert("Invalid OTP.");
        }
      });
    } else {
      alert("Failed to send OTP. Response: " + message);  // Show the response message in case of failure
    }
  }).catch(error => {
    console.error("Error sending email: ", error);  // Log the error for debugging
    alert("An error occurred while sending the OTP.");
  });
  
}
