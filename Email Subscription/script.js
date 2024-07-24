const scriptURL = 'https://script.google.com/macros/s/AKfycbx3YB9Uimjh6CowHfTeEEtswR1YpjNnONYa-ZlvlUIaHS4jkw4KymZXgGhaQnOoivBb/exec'
const form = document.forms['submit-to-google-sheet'];
const SuccessMsg = document.getElementById("success-msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        SuccessMsg.innerHTML = "Thank You For Subscribing!"
        setTimeout(function(){
          SuccessMsg.innerHTML = ""
        }, 4000)
         form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
