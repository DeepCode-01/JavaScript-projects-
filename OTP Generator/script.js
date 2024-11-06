function sendOTP() {
  const email = document.getElementById("email");
  const verify = document.getElementsByClassName("otpverify");

  // Validate email input
  if (!email.value) {
    alert("Please enter a valid email address.");
    return;
  }

  let otp_val = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  let emailBody = `
    <html>
      <body>
        <h2>Your One-Time Password (OTP)</h2>
        <p>Your OTP for verification is: <strong>${otp_val}</strong></p>
        <p>This OTP will expire in 10 minutes.</p>
      </body>
    </html>
  `;

  console.log("Sending email to:", email.value);
  console.log("OTP value:", otp_val);

  Email.send({
    SecureToken: "37f5d2d6-15d0-43d6-bbda-3f1633510fd4",
    To: email.value,
    From: "dv292901@gmail.com",
    Subject: "Your OTP for verification",
    Body: emailBody
  }).then(message => {
    console.log("Email sending response:", message);
    console.log("Full email details:", {
      to: email.value,
      from: "dv292901@gmail.com",
      subject: "Your OTP for verification",
      otp: otp_val
    });
    
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
      console.error("Failed to send OTP. Response:", message);
      alert("Failed to send OTP. Error: " + message);
    }
  }).catch(error => {
    console.error("Error sending email:", error);
    alert("An error occurred while sending the OTP. Error: " + error.message);
  });
}
