const imageFilenames = ['images/Helldivers2.jpg', 'images/MagicCom.jpg', 'images/paintingmini.jpg', 'images/RallyRace.jpg', 'images/role-playing-games.jpeg'];
const thumbBar = document.querySelector('.thumb-bar');

imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', filename);
    newImage.setAttribute('alt', 'Image');
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', function() {
        const src = this.getAttribute('src');
        const alt = this.getAttribute('alt');
        document.querySelector('.displayed-img').setAttribute('src', src);
        document.querySelector('.displayed-img').setAttribute('alt', alt);
    });
});

const btn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function() {
    if (this.getAttribute('class') === 'dark') {
        this.setAttribute('class', 'light');
        this.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        this.setAttribute('class', 'dark');
        this.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});