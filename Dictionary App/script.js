const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inpword = document.getElementById("in-word").value;

  fetch(`${url}${inpword}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const audioSrc = data[0].phonetics[0].audio;
      if (audioSrc) {
        sound.setAttribute("src", audioSrc);
      } else {
        console.warn("No audio source available for this word.");
      }

      result.innerHTML = `
        <div class="words">
          <h3>${inpword}</h3>
          <button onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>${data[0].phonetic}</p>
        </div>
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
          ${data[0].meanings[0].definitions[0].example || ""}
        </p>
      `;
    })
    .catch((error) => {
      result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
      console.error("Error fetching data:", error);
    });
});

function playSound() {
  const soundElement = document.getElementById("sound");

  if (soundElement.src) {
    soundElement
      .play()
      .catch((err) => console.error("Error playing sound:", err));
  } else {
    console.error("No audio source set for playback.");
  }
}
