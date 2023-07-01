var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');
var previousTab = null;

function opentab(tabname) {
    var targetElement = document.getElementById(tabname);
    if (previousTab !== tabname) {
        for (var i = 0; i < tablinks.length; i++) {
            tablinks[i].classList.remove('active-link');
        }
        for (var i = 0; i < tabcontents.length; i++) {
            tabcontents[i].classList.remove('active-tab');
        }
        targetElement.classList.add('active-tab');
        previousTab = tabname;
    }
}

let index = 0;
const images = [
  './images/slide1.png',
  './images/slide2.jpg',
  './images/slide3.jpg'
];
const slider = document.querySelector('.img-container');

function startSlider() {
  setInterval(changeBackground, 5000);
}

function changeBackground() {
  slider.style.backgroundImage = `url('${images[index]}')`;
  index = (index + 1) % images.length;
}

startSlider();
changeBackground();


