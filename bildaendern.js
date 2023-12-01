document.addEventListener('DOMContentLoaded', function() {
  const button = document.createElement('button');
  button.textContent = 'Ändere Hintergrund';
  button.addEventListener('click', changeBackground);

  document.body.appendChild(button);
});

function changeBackground() {
  const images = [
    '0.jpg',
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg'
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const newBackgroundImage = images[randomIndex];

  document.body.style.backgroundImage = `url(${newBackgroundImage})`;
}