const resetRecipe = () => {
  const removeOld = document.querySelector(".recipe");
  while (removeOld.lastChild !== null) {
    removeOld.removeChild(removeOld.lastChild);
  }
};

const displayRecipe = (e) => {
  resetRecipe();
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${e.target.textContent}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let recipe = document.querySelector(".recipe");
      console.log(data.meals[0]);

      let picture = document.createElement("img");
      picture.src = data.meals[0].strMealThumb;

      let instructions = document.createElement("p");
      instructions.textContent = data.meals[0].strInstructions;

      let name = document.createElement("h2");
      name.textContent = data.meals[0].strMeal;

      recipe.appendChild(picture);
      recipe.appendChild(name);
      recipe.appendChild(instructions);
    });
};

const fetchRecipes = () => {
  const userSearched = document.querySelector(".search").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearched}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let index = 0;
      for (let item of data.meals) {
        const results = document.querySelector(".resultItems");
        const foodName = document.createElement("h4");
        foodName.addEventListener("click", displayRecipe);
        foodName.textContent = item.strMeal;
        foodName.value = index;
        results.appendChild(foodName);
        index++;
      }
    });
};

document.querySelector(".searchButt").addEventListener("click", fetchRecipes);
