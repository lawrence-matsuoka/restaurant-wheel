// Set constants for the category and restaurant wheels
const categoryWheel = new Wheel(document.getElementById('category-wheel'), ['Burgers', 'Pizza', 'Sushi', 'Breakfast', 'Indian', 'Mexican', 'Asian', 'Chinese', 'Mediterranean', 'Italian']);
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
            return ['A&W', 'McDonald\'s', 'Burger King', 'Wendy\'s', 'Dairy Queen', ];
        case 'Pizza':
            return ['Domino\'s', 'Pizza Hut', 'Little Caesars'];
        case 'Sushi':
            return ['Sushi Samba', 'Nobu', 'Yo! Sushi'];
        case 'Breakfast':
            return ['Cheeky Neighbour', 'Smitty\'s'];
        case 'Indian':
            return ['Curry'];
        case 'Mexican':
            return ['Taco Bell', 'Mexi\'s', 'Antojo\'s'];
        case 'Asian':
            return ['Thai Express', 'Pho', 'etc'];
        case 'Chinese':
            return ['Great Wall', 'Jean\'s'];
        case 'Mediterranean':
            return ['Shawarma'];
        case 'Italian':
            return ['Pasghetti'];
        default:
            return [];
    }
}