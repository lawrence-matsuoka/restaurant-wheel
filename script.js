const categories = ["Burgers", "Pizza", "Sushi"]; // Example categories
const restaurants = {
  Burgers: ["A&W", "McDonald's", "Burger King"],
  Pizza: ["Domino's", "Little Caesars", "Pizza Hut"],
  Sushi: ["Sushi Palace", "Mikado", "Tokyo Sushi"],
};

let categoryWheel = document.getElementById("category-wheel");
let restaurantWheel = document.getElementById("restaurant-wheel");

function spinWheel() {
  // Simulate spinning logic
  let categoryIndex = Math.floor(Math.random() * categories.length);
  let restaurantIndex = Math.floor(Math.random() * restaurants[categories[categoryIndex]].length);

  // Rotate wheels
  rotateWheel(categoryWheel, categoryIndex);
  setTimeout(() => {
    rotateWheel(restaurantWheel, restaurantIndex);
  }, 1500); // Delay before spinning the second wheel

  // Display the second wheel
  categoryWheel.style.display = "none";
  restaurantWheel.style.display = "block";
}

function rotateWheel(wheel, selectedIndex) {
  const totalSlices = categories.length; // Change this to the total number of categories or restaurants
  const degrees = 360 / totalSlices;
  const rotation = 360 * 5 + degrees * selectedIndex;

  wheel.style.transition = "transform 3s ease-out";
  wheel.style.transform = `rotate(${rotation}deg)`;
}