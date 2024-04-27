const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const images = ['Helldivers2.jpg', 'MagicCom.jpg', 'paintingmini.jpg', 'RallyRace.jpg', 'role-playing-games.jpeg'];
const alts = {
    'Helldivers2.jpg': 'Squad just looking awesome',
    'MagicCom.jpg': 'some folks sitting around a table looking happy but soon to be mad',
    'paintingmini.jpg': 'Someone painting there stress and troubles away',
    'RallyRace.jpg': 'Something i enjoy watching on TV, but rather try once',
    'role-playing-games.jpeg': 'Folks around the table telling an epic story'
};

for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${images}`);
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
      displayedImage.src = e.target.src;
      displayedImage.alt = e.target.alt;
    });
}
  
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});