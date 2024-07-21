let icon = document.getElementById("icon")


if(localStorage.getItem("theme") ==null){
    localStorage.setItem("theme", "light")
}


let localData = localStorage.getItem("theme")
if(localData == "light"){
    icon.src = "dark theme icon/moon.png"
    document.body.classList.remove("dark-theme")
}else if(localData == "dark"){
    icon.src = "dark theme icon/sun.png"
    document.body.classList.add("dark-theme")
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if( document.body.classList.contains("dark-theme")){
        icon.src = "dark theme icon/sun.png"
        localStorage.setItem("theme", "dark")
    }else{
        icon.src = "dark theme icon/moon.png"
        localStorage.setItem("theme", "light")
    }
}