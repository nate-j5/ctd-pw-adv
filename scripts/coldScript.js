let currentIndex = 0;
let coldRecipes = [];
let currentImageUrl = "";

// Fetch recipes from the API
function fetchRecipes() {
  fetch("https://api.sampleapis.com/coffee/iced")
    .then((response) => response.json())
    .then((recipe) => {
      coldRecipes = recipe;
      renderRecipes();
      renderArrows();
    })
    .catch((error) => {
      alert('Sorry, we had an error fetching your recipes')
      console.error("Error fetching recipes:", error);
    });
}

// Render the current recipe
function renderRecipes() {
  const recipe = coldRecipes[currentIndex];
  const recipeContainerList = document.getElementById("recipe-list");
  const ingredientsList = recipe.ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("");

  currentImageUrl = recipe.image;

  recipeContainerList.innerHTML = `<h2>${recipe.title}</h2>
    <p>${recipe.description}</p>
    <p id="ingredientID">Ingredients:</p>
    <ul>${ingredientsList}</ul>`;

  const currentImageElement = document.getElementById("current-image");
  currentImageElement.src = currentImageUrl;
}

// Render the left and right arrows
function renderArrows() {
  const arrowsContainer = document.getElementById("arrows");
  arrowsContainer.innerHTML = `
        <button id="prev-btn">←</button>
        <button id="next-btn">→</button>
    `;

  // Add event listeners to arrow buttons
  const prevButton = document.getElementById("prev-btn");
  const nextButton = document.getElementById("next-btn");
  prevButton.addEventListener("click", prevItem);
  nextButton.addEventListener("click", nextItem);
}

// Cycle to the next item
function nextItem() {
  currentIndex = (currentIndex + 1) % coldRecipes.length;
  renderRecipes();
}

// Cycle to previous item
function prevItem() {
  currentIndex = (currentIndex - 1 + coldRecipes.length) % coldRecipes.length;
  renderRecipes();
}

// Fetch recipes once DOM is loaded
document.addEventListener("DOMContentLoaded", fetchRecipes);
