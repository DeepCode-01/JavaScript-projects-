let toastBox = document.getElementById("toast-box")
let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submitted.;`
let failedsMsg =  `<i class="fa-solid fa-circle-xmark"></i> Failed! please fix the error.`
let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input , check again.`

function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast")
    toast.innerHTML= msg;
    toastBox.appendChild(toast)

    if(msg.inculdes()){
        
    }
}