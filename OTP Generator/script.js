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

  // Log the email details for debugging
  console.log("Sending email to:", email.value);
  console.log("OTP value:", otp_val);

  Email.send({
    SecureToken: "YOUR_SECURE_TOKEN_HERE", // Replace with your actual secure token
    To: email.value,
    From: "YOUR_SENDER_EMAIL@example.com", // Replace with your sender email
    Subject: "Email OTP using JavaScript",
    Body: emailBody
  }).then(message => {
    console.log("Email sending response:", message);
    
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
      alert("Failed to send OTP. Response: " + message);
    }
  }).catch(error => {
    console.error("Error sending email:", error);
    alert("An error occurred while sending the OTP. Check the console for details.");
  });
}
