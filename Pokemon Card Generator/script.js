const url = " https://pokeapi.co/api/v2/pokemon/";
const typeColors = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric:"#fed330",
    fighting: "#30336b",
    fairy:"#ff0069",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost:"#a55eea",
    ice: "#74b9ff",
    normal : "#95afc0",
    poison:"#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF"

}
let card = document.getElementById("card");
let btn = document.getElementById("btn");

let getPokemonData = () => {
  let id = Math.floor(Math.random() * 150) + 1;

  const FinalUrl = url + id;

  fetch(FinalUrl)
    .then((resp) => resp.json())
    .then((data) => {
      generateCard(data);
    });
};

// generate cards

let generateCard = (data) => {
  console.log(data);
  const hp = data.stats[0].base_stat;
  const imgSrc = data.sprites.other.dream_world.front_default;
  const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
  const statAttack = data.stats[1].base_stat;
  const statDefence = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;

//   set theme color based on pokemon 

const themeColor= typeColors[data.types[0].type.name];
console.log(themeColor)

  card.innerHTML = `  
      <p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src=${imgSrc} alt="">
            <h2 class="poke-name">${pokeName}</h2>
            <div class="types">
                
            </div>
            <div class="state">
                <div>
                    <h3>${statAttack}</h3>
                    <p>Attack</p>
                </div>


                <div>
                    <h3>${statDefence}</h3>

                    <p>Defence</p>
                </div>

                <div>
                    <h3>${statSpeed}</h3>
                    <p>Speed</p>
                </div>
            </div>
            `;

            appendTypes(data.types);
         styleCard(themeColor);
};

let appendTypes = (types)=>{

    types.forEach(item => {
       let span = document.createElement("SPAN") 
       span.textContent = item.type.name;
       document.querySelector(".types").appendChild(span)
    });
}

let styleCard = (color)=>{
    card.style.background= `radial-gradient(
        circle at 50% 0% , ${color} 36% , #ffffff 37%)`

    card.querySelectorAll(".types span").forEach(typeColors => {
        typeColors.style.background = color;
    }) ;   
}

btn.addEventListener("click", getPokemonData);
window.addEventListener("load", getPokemonData);
