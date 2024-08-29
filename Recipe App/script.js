let result = document.getElementById("result");
let searchBtn = document.getElementById("search");

let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

let userIn = document.getElementById("user-in").value;

fetch(url + "pizza")
  .then((response) => response.json())
  .then((data) => {
    let myMeal = data.meals[0];

    console.log(myMeal)
    console.log(myMeal.strMealThumb)
    console.log(myMeal.strMeal)
    console.log(myMeal.strArea)
    console.log(myMeal.strInstructions)

    let count =1;
    let ingradients = [];
    for(let i in myMeal){
        let ingradient = "";
        let measure = "";
        if(i.startsWith("strIngredient") && myMeal[i]){
           ingradient= myMeal[i];
           measure = myMeal[`strMeasure` + count]
           count += 1
        }
       ingradients.push(~`${measure} ${ingradient}`)
    }
    console.log(ingradients)
    result.innerHTML=`
    <img src=${myMeal.strMealThumb}>
    <div class="details">
    <h2>${myMeal.strMeal}</h2> 
    <h2>${myMeal.strArea}</h2> 
    </div>
    <div id="ingradient-con"></div>
     <div id="recipe">
     <button id="hide-recipe">X</button>
     <p id="instructions>${myMeal.strInstructions}</p>
     </div>
    `
  });
