const wheel = document.getElementById('wheel');
const resultDiv = document.getElementById('result');
let spinning = false;

const spinWheel = () => {
  if (!spinning) {
    spinning = true;
    const degrees = Math.floor(Math.random() * 360) + 3600; // Random number of degrees (10 spins)
    
    wheel.style.transform = `rotate(${degrees}deg)`;
    
    setTimeout(() => {
      spinning = false;
      displayResult(degrees % 360);
    }, 3000); // Match the transition time
  }
};

const displayResult = (angle) => {
  const pieSliceNumber = Math.floor(angle / (360 / numSlices)); // Assuming you have a specific number of pie slices
  resultDiv.textContent = `You landed on slice ${pieSliceNumber + 1}`;
};

// Add pie slices dynamically (customize numSlices as per your requirement)
const numSlices = 8;
for (let i = 0; i < numSlices; i++) {
  const slice = document.createElement('div');
  slice.className = 'slice';
  slice.style.background = i % 2 === 0 ? '#FF6347' : '#6495ED'; // Alternating colors
  wheel.appendChild(slice);
}
