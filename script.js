const categories = [
    {
      name: 'Sushi',
      restaurants: ['Sushi Nami', 'Sushi Jet']
    },
    {
      name: 'Pizza',
      restaurants: ['Dominos', 'Pizza Pizza']
    },
    {
      name: 'Burger',
      restaurants: ['Wendy\'s', 'McDonald\'s']
    }
    // Add more categories as needed
  ];
  
  let categoryIndex = 0;
  let restaurantIndex = 0;
  
  function renderWheel(wheelId, slices, backgroundColor) {
    const wheel = document.getElementById(wheelId);
    wheel.innerHTML = '';
  
    const angle = 360 / slices.length;
  
    for (let i = 0; i < slices.length; i++) {
      const slice = document.createElement('div');
      slice.className = 'pie-slice';
      slice.style.borderWidth = `0 ${angle}px ${Math.max(document.documentElement.clientHeight, window.innerHeight || 0)}px`;
      slice.style.transform = `rotate(${angle * i}deg)`;
      slice.style.backgroundColor = backgroundColor;
      slice.innerText = slices[i];
      wheel.appendChild(slice);
    }
  }
  
  function spinWheel() {
    const categoryWheel = document.getElementById('category-wheel');
    const restaurantWheel = document.getElementById('restaurant-wheel');
  
    const categorySlices = categories.map(category => category.name);
    renderWheel('category-wheel', categorySlices, '#e74c3c');
  
    const currentCategory = categories[categoryIndex];
    const restaurantSlices = currentCategory.restaurants;
    renderWheel('restaurant-wheel', restaurantSlices, '#3498db');
  
    categoryWheel.style.transform = `rotate(${360 * Math.random()}deg)`;
    restaurantWheel.style.transform = `rotate(${360 * Math.random()}deg)`;
  
    categoryIndex = Math.floor(Math.random() * categories.length);
    restaurantIndex = Math.floor(Math.random() * currentCategory.restaurants.length);
  }
  
  function getSelectedRestaurant() {
    const currentCategory = categories[categoryIndex];
    return currentCategory.restaurants[restaurantIndex];
  }
  