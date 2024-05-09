// Select the canvas element from the HTML document
const canvas = document.querySelector('canvas');
// Get the 2D rendering context for the canvas
const ctx = canvas.getContext('2d');

// Define the boundaries of the canvas as a box
const box = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height
};

// Function to draw a circle on the canvas
function drawCircle(x, y, size) {
  // Clear the entire canvas by filling it with white
  ctx.fillStyle = 'white';
  ctx.fillRect(box.x, box.y, box.width, box.height);

  // Draw a circle at the specified position and size
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

// Initial position and size of the circle
let x = 50;
let y = 50;
const size = 30;

// Draw the initial circle on the canvas
drawCircle(x, y, size);

// Event listener for keyboard input to move the circle
document.addEventListener('keydown', function(event) {
  // Calculate the new position based on keyboard input
  let newX = x;
  let newY = y;

  // Move the circle based on WASD keys
  switch(event.key) {
    case 'w': // Up arrow
      newY -= 10;
      break;
    case 'a': // Left arrow
      newX -= 10;
      break;
    case 's': // Down arrow
      newY += 10;
      break;
    case 'd': // Right arrow
      newX += 10;
      break;
    default:
      return; // Ignore other keys
  }

  // Check if the new position is within the canvas boundaries
  if (
    newX - size >= box.x &&
    newX + size <= box.x + box.width &&
    newY - size >= box.y &&
    newY + size <= box.y + box.height
  ) {
    // Update the position of the circle if within boundaries
    x = newX;
    y = newY;
  }

  // Redraw the circle at the new position
  drawCircle(x, y, size);
});
