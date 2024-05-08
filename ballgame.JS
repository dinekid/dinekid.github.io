const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const box = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height
};

function drawCircle(x, y, size) {
  ctx.fillStyle = 'white';
  ctx.fillRect(box.x, box.y, box.width, box.height);

  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(x, y, size, 0, 2 * Math.PI);
  ctx.fill();
}

let x = 50;
let y = 50;
const size = 30;

drawCircle(x, y, size);

document.addEventListener('keydown', function(event) {
  let newX = x;
  let newY = y;

  switch(event.key) {
    case 'w':
      newY -= 10;
      break;
    case 'a':
      newX -= 10;
      break;
    case 's':
      newY += 10;
      break;
    case 'd':
      newX += 10;
      break;
    default:
      return;
  }

  // Check if the new position is within the boundaries
  if (
    newX - size >= box.x &&
    newX + size <= box.x + box.width &&
    newY - size >= box.y &&
    newY + size <= box.y + box.height
  ) {
    x = newX;
    y = newY;
  }

  drawCircle(x, y, size);
});