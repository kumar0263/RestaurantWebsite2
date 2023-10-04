const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburger.classList.remove("active");
  })
);

const Menuitems = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggies",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?friedChicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneerTikka",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fishTacos",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const aboveFourCheckbox = document.getElementById("abovefour");
const belowfourcheckbox = document.getElementById("belowfour");
const searchInput = document.getElementById('inputsearch');
const allRecipesButton = document.getElementById('allrecipes');
const vegRecipesButton = document.getElementById('vegrecipes');
const nonVegRecipesButton = document.getElementById('nonvegrecipes');

function displayRecipes(Menuitems) {
  const recipeContainer = document.querySelector(".jscontent");
  recipeContainer.innerHTML = "";

  Menuitems.forEach((recipe, index) => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    // Create and set content for recipe image
    const recipeImage = document.createElement("img");
    recipeImage.src = recipe.imageSrc;
    recipeImage.alt = recipe.name;
    recipeCard.appendChild(recipeImage);

    // Create and set content for recipe type (veg or non-veg)
    const recipeType = document.createElement("p");
    recipeType.textContent = `${recipe.type}`;
    recipeCard.appendChild(recipeType);

    // Create and set content for recipe name
    const recipeName = document.createElement("h2");
    recipeName.textContent = recipe.name;
    recipeCard.appendChild(recipeName);

    // Create and set content for recipe time
    const recipeTime = document.createElement("p");
    recipeTime.textContent = `${recipe.time}`;
    recipeCard.appendChild(recipeTime);

    // Create and set content for recipe rating
    const recipeRating = document.createElement("p");
    recipeRating.textContent = `${recipe.rating}`;
    recipeCard.appendChild(recipeRating);

    // Create and set "Like" button
    const likeButton = document.createElement("button");
    likeButton.classList.add("like-button");
    likeButton.textContent = recipe.isLiked ? "Unlike" : "Like";

    // Add click event listener to toggle the like status
    likeButton.addEventListener("click", () => {
      toggleLike(index);
    });

    recipeCard.appendChild(likeButton);
    recipeContainer.appendChild(recipeCard);
  });
}

searchInput.addEventListener('input', () => {
    // Get the user's search query
    const searchQuery = searchInput.value.trim().toLowerCase();
  
    // Filter recipes based on the search query and rating checkbox
    const filteredRecipes = Menuitems.filter(recipe => {
      // Check if the recipe name contains the search query
      const nameMatch = recipe.name.toLowerCase().includes(searchQuery);
  
      // Return true if both conditions are met
      return nameMatch;
    });
  
    // Update the UI with the filtered recipes
    displayRecipes(filteredRecipes);
  });

// Add an event listener to the checkbox
aboveFourCheckbox.addEventListener("change", () => {
  // Check if the checkbox is checked
  if (aboveFourCheckbox.checked) {
    // Filter the recipes with a rating of 4 and above
    const filteredRecipes = Menuitems.filter((recipe) => recipe.rating >= 4.0);
    // Call the displayRecipes function with the filtered recipes
    displayRecipes(filteredRecipes);
  } else {
    // If the checkbox is unchecked, display all recipes
    displayRecipes(Menuitems);
  }
});

belowfourcheckbox.addEventListener("change", ()=>{
    if(belowfourcheckbox.checked){
        const filteredRecipes = Menuitems.filter((recipe) => recipe.rating <4.0);
        displayRecipes(filteredRecipes);
    }else{
        displayRecipes(Menuitems);
    }
});

allRecipesButton.addEventListener('click', () => {
    // Display all recipes
    displayRecipes(Menuitems);
});

vegRecipesButton.addEventListener('click', () => {
    // Filter and display only vegetarian recipes
    const vegetarianRecipes = Menuitems.filter(recipe => recipe.type === 'veg');
    displayRecipes(vegetarianRecipes);
});

nonVegRecipesButton.addEventListener('click', () => {
    // Filter and display only non-vegetarian recipes
    const nonVegetarianRecipes = Menuitems.filter(recipe => recipe.type === 'non-veg');
    displayRecipes(nonVegetarianRecipes);
});
  
  
displayRecipes(Menuitems);
