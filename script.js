// script.js
const categoryWheel = new Wheel(document.getElementById('category-wheel'), ['Burgers', 'Pizza', 'Sushi']);
const restaurantWheel = new Wheel(document.getElementById('restaurant-wheel'), []);

function spinWheel() {
    categoryWheel.spin().then(selectedCategory => {
        const selectedRestaurants = getRestaurants(selectedCategory);
        restaurantWheel.updateItems(selectedRestaurants).spin();
    });
}

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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('spin-button').addEventListener('click', spinWheel);
});