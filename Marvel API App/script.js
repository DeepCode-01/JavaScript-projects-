let input = document.getElementById("input-box");
let submit = document.getElementById("submit-button");
let showContainer = document.getElementById("show-container");
let listContainer = document.querySelector(".list");

let date = new Date();
const timestamp = date.getTime();

const [ apiKey, hashValue] = [ publicKey, hashVal];

submit.addEventListener("click", getResult);

async function getResult() {
    try {
        // Input validation
        if (input.value.trim().length < 1) {
            alert("Input can't be empty");
            return;
        }

        showContainer.innerHTML = ""; 
        
        const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`;

        const response = await fetch(url);
        const jsonData = await response.json();

        // Check if the API request was successful
        if (jsonData.code === 200 && jsonData.data && jsonData.data.results) {
            if (jsonData.data.results.length === 0) {
                showContainer.innerHTML = '<div class="error">No character found!</div>';
                return;
            }

            jsonData.data.results.forEach((element) => {
                const imgPath = element.thumbnail.path;
                const imgExtension = element.thumbnail.extension;
                
                showContainer.innerHTML += `
                    <div class="card-container">
                        <div class="container-img">
                            <img src="${imgPath}.${imgExtension}" alt="${element.name}"/>
                        </div>
                        <div class="character-name">
                            ${element.name}
                        </div>
                        <div class="character-details">
                            ${element.description || 'No description available'}
                        </div>
                    </div>`;
            });
        } else {
            showContainer.innerHTML = '<div class="error">Error fetching data from Marvel API</div>';
        }
    } catch (error) {
        console.error('Error:', error);
        showContainer.innerHTML = '<div class="error">Something went wrong! Please try again.</div>';
    }
}

window.onload = () => {
 getResult()
};