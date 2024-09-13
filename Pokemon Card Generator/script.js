const url = " https://pokeapi.co/api/v2/pokemon/";
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
  const pokeName = data.name;
  const statAttack = data.stats[1].base_stats;
  const statDefence = data.stats[2].base_stats;
  const statSpeed = data.stats[5].base_stats;

  card.innerHTML = `  
      <p class="hp">
                <span>HP</span>
                ${hp}
            </p>
            <img src=${imgSrc} alt="">
            <h2 class="poke-name">${pokeName}</h2>
            <div class="types">
                <span>type1</span>
                <span>type2</span>
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
};

btn.addEventListener("click", getPokemonData);
window.addEventListener("load", getPokemonData);
