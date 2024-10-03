let input = document.getElementById("input-box");
let submit = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");

let date = new Date();
console.log(date.getTime());

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal];

submit.addEventListener(
  "click",
  (getResult = async () => {
    if (input.value.trim().length < 1) {
      alert("Input can't be empty");
    }
    showContainer.innerHTML = "";
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

    const response = await fetch(url);
    const jsonData = await response.json();
    jsonData.date["results"].forEach((element) => {
       showContainer.innerHTML = `
       <div class="card-container">
       <div class="container-img">
       <img src="${element.thumbnail["path"] + "." + element.thumbnail["extention"]}"/>
       </div>
       <div class="character-name">
       ${element.name}
       </div>
       <div class="character-details">
       ${element.description}
       </div>
       </div>` 
    });
  })
);

window.onload = ()=>{
 getResult()
}
