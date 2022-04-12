//document.querySelector('.foodName')

const fetchRecipes = () => {
  const userSearched = document.querySelector(".search").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userSearched}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let item of data.meals) {
        const results = document.querySelector(".resultItems");
        const foodName = document.createElement("h4");
        foodName.textContent = item.strMeal;
        results.appendChild(foodName);
      }
    });
};

document.querySelector(".searchButt").addEventListener("click", fetchRecipes);
