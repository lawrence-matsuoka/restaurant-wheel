// Set constants for the category and restaurant wheels
const categoryWheel = new Wheel(document.getElementById('category-wheel'), ['Burgers', 'Pizza', 'Sushi', 'Breakfast', 'Indian', '']);
const restaurantWheel = new Wheel(document.getElementById('restaurant-wheel'), []);

// Create a function to spin the wheel
function spinWheel() {
    categoryWheel.spin().then(selectedCategory => {
        const selectedRestaurants = getRestaurants(selectedCategory);
        restaurantWheel.updateItems(selectedRestaurants).spin();
    });
}

// Call the function
function getRestaurants(category) {
    switch (category) {
        case 'Burgers':
            return ['A&W', 'McDonald\'s', 'Burger King'];
        case 'Pizza':
            return ['Domino\'s', 'Pizza Hut', 'Little Caesars'];
        case 'Sushi':
            return ['Sushi Samba', 'Nobu', 'Yo! Sushi'];
        default:
            return [];
    }
}