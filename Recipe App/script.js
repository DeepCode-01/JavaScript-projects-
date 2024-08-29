let result = document.getElementById("result");
let searchBtn = document.getElementById("search");
let url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

searchBtn.addEventListener("click", () => {
  let userIn = document.getElementById("user-in").value;
  if (userIn.length == 0) {
    result.innerHTML = "<h3>Input Feild Can't Be Empty</h3>";
  } else {
    fetch(url + userIn)
      .then((response) => response.json())
      .then((data) => {
        let myMeal = data.meals[0];

        console.log(myMeal);
        console.log(myMeal.strMealThumb);
        console.log(myMeal.strMeal);
        console.log(myMeal.strArea);
        console.log(myMeal.strInstructions);

        let count = 1;
        let ingredients = [];
        for (let i in myMeal) {
          let ingredient = "";
          let measure = "";
          if (i.startsWith("strIngredient") && myMeal[i]) {
            ingredient = myMeal[i];
            measure = myMeal[`strMeasure` + count];

            if (ingredient && measure) {
              ingredients.push(`${measure} ${ingredient}`);
            }
            count += 1;
          }
        }
        console.log(ingredients);

        result.innerHTML = `
      <img src="${myMeal.strMealThumb}">
      <div class="details">
        <h2>${myMeal.strMeal}</h2> 
        <h4>${myMeal.strArea}</h4> 
      </div>
      <div id="ingradient-con"></div>
      <div id="recipe" style="display: none;">
        <button id="hide-recipe">X</button>
        <p id="instructions">${myMeal.strInstructions}</p>
      </div>
      <button id="show-recipe">View Recipe</button>
    `;

        let ingradientCon = document.getElementById("ingradient-con");
        let parent = document.createElement("ul");
        ingredients.forEach((ingredient) => {
          let listItem = document.createElement("li");
          listItem.textContent = ingredient;
          parent.appendChild(listItem);
        });
        ingradientCon.appendChild(parent);

        let hideRecipe = document.getElementById("hide-recipe");
        let showRecipe = document.getElementById("show-recipe");
        let recipe = document.getElementById("recipe");

        showRecipe.addEventListener("click", () => {
          recipe.style.display = "block";
          showRecipe.style.display = "none";
        });

        hideRecipe.addEventListener("click", () => {
          recipe.style.display = "none";
          showRecipe.style.display = "block";
        });
      }).catch(()=>{
        result.innerHTML = "<h3> Invalid Input</h3>"
      })
  }
});
