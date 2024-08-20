const accessKey = "vJtedahNN2gt7oh0KCIp9QDHxYGZQEpH8ULohmUuUQI"
const searchForm = document.getElementById("search-form")
const searchBox = document.getElementById("serach-box")
const searchResult = document.getElementById("serach-result")
const showMore = document.getElementById("show-more-btn")

let kayword = "";
let page = 1;

async function serachImg() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    if(page=== 1){
        searchResult.innerHTML="";
    }

    const results = data.results;
    results.map((results)=>{
        const image = document.createElement('img');
        image.src= results.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = results.links.html;
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })

    showMore.style.display = "block"
}

searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    page =1;
    serachImg()
})

showMore.addEventListener("click",()=>{
    page++;
    serachImg()
})