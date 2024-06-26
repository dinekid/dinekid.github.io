const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
const alts = {
  'images/pic1.jpg': 'Squad just looking awesome',
  'images/pic2.jpg': 'some folks sitting around a table looking happy but soon to be mad',
  'images/pic3.jpg': 'Someone painting their stress and troubles away',
  'images/pic4.jpg': 'Something I enjoy watching on TV, but would rather try once',
  'images/pic5.jpg': 'Folks around the table telling an epic story'
};

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.src = `images/${image}`;
  newImage.alt = alts[image];
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

btn.addEventListener('click', () => {
  const btnClass = btn.classList.contains('dark') ? 'light' : 'dark';
  btn.classList.toggle('dark');
  btn.classList.toggle('light');
  btn.textContent = btnClass === 'dark' ? 'Darken' : 'Lighten';
  overlay.style.backgroundColor = btnClass === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)';
});