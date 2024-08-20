const accessKey = "vJtedahNN2gt7oh0KCIp9QDHxYGZQEpH8ULohmUuUQI"
const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("serach-box")
const searchResult = document.getElementById("serach-result")
const showMore = document.getElementById("show-more-btn")

let kayword = "";
let page = 1;

async function serachImg() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log (data);
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page =1;
    serachImg()
})