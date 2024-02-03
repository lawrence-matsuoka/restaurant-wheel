

// Create a Wheel class
class Wheel {
    constructor(element, items) {
        this.element = element;
        this.items = items;
        this.spinAngle = 0;
        this.result = null;
        this.createWheel();
    }

    createWheel() {
        this.items.forEach((item, index) => {
            const wedge = document.createElement('div');
            wedge.className = 'wheel-wedge';
            wedge.style.transform = `rotate(${(360 / this.items.length) * index}deg)`;
            wedge.innerText = item;
            this.element.appendChild(wedge);
        });
    }

    spin() {
        return new Promise(resolve => {
            this.spinAngle += 1440 + Math.floor(Math.random() * 360);
            this.element.style.transition = 'transform 3s ease-out';
            this.element.style.transform = `rotate(${this.spinAngle}deg)`;

            setTimeout(() => {
                this.element.style.transition = 'none';
                const index = Math.floor((this.spinAngle % 360) / (360 / this.items.length));
                this.result = this.items[index];
                resolve(this.result);
            }, 3000);
        });
    }

    updateItems(items) {
        this.items = items;
        this.element.innerHTML = '';
        this.createWheel();
        return this;
    }
}

// Set constants for the category and restaurant wheels
const categoryWheel = new Wheel(document.getElementById('category-wheel'), ['Burgers', 'Pizza', 'Sushi', 'Breakfast', 'Indian', 'Mexican', 'Asian', 'Chinese', 'Mediterranean', 'Italian']);
const restaurantWheel = new Wheel(document.getElementById('restaurant-wheel'), []);


// Create a function to spin the wheel
function spinWheel() {
    categoryWheel.spin().then(selectedCategory => {
        const selectedRestaurants = getRestaurants(selectedCategory);
        restaurantWheel.updateItems(selectedRestaurants).spin();
        console.log(selectedCategory, selectedRestaurants)
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

