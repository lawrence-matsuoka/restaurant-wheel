const wheel = document.getElementById('wheel');
const resultDiv = document.getElementById('result');
let spinning = false;

// Array of names for each pie slice
const sliceNames = [
  'Prize 1',
  'Prize 2',
  'Prize 3',
  'Prize 4',
  'Prize 5',
  'Prize 6',
  'Prize 7',
  'Prize 8'
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

// Add pie slices dynamically
for (let i = 0; i < sliceNames.length; i++) {
  const slice = document.createElement('div');
  slice.className = 'slice';
  slice.style.background = i % 2 === 0 ? '#FF6347' : '#6495ED'; // Alternating colors
  wheel.appendChild(slice);
}
