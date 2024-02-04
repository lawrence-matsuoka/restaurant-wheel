const wheel = document.getElementById('wheel');
const resultDiv = document.getElementById('result');
let spinning = false;

// Array of names for each pie slice
const sliceNames = [
  'Pizza',
  'Sushi',
  'Burger',
  'Noodles',
  'Mexican',
  'Breakfast & Brunch',
  'Chicken Burger',
  'Cook'
];

const spinWheel = () => {
  if (!spinning) {
    spinning = true;
    const degrees = Math.floor(Math.random() * 360) + 3600; // Random number of degrees (10 spins)

    // Reset the wheel's transformation to its initial state
    wheel.style.transition = 'none';
    wheel.style.transform = 'rotate(0deg)';

    // Trigger a reflow before applying the new transformation
    void wheel.offsetWidth;

    // Apply the new transformation
    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
      spinning = false;
      displayResult(degrees % 360);
    }, 3000); // Match the transition time
  }
};

const displayResult = (angle) => {
  const pieSliceNumber = Math.floor(angle / (360 / sliceNames.length));
  const result = sliceNames[pieSliceNumber];
  resultDiv.textContent = `You landed on: ${result}`;
};

// Add pie slices dynamically with text
const totalSlices = sliceNames.length;
for (let i = 0; i < totalSlices; i++) {
  const slice = document.createElement('div');
  slice.className = 'slice';
  slice.style.background = i % 2 === 0 ? '#FF6347' : '#6495ED'; // Alternating colors
  slice.style.transform = `rotate(${(360 / totalSlices) * i}deg)`; // Position each slice

  // Add text element for prize name
  const text = document.createElement('span');
  text.textContent = sliceNames[i];
  text.style.transform = `rotate(${-((360 / totalSlices) * i)}deg)`; // Counter-rotate text
  slice.appendChild(text);

  wheel.appendChild(slice);
}
