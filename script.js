const navSlide = () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");
  const navLinks = document.getElementById('links')

  menuButton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('nav-active')
  })
  navLinks.addEventListener('click', () => {
    menu.classList.toggle('nav-active')
  })
};

const navChangeColor = () => {
    const nav = document.getElementById('navbar')
    const navText = document.getElementById('nav-text')
    console.log('zmiana')
    if(window.scrollY >=95){
        nav.classList.add('bg-white')
        navText.classList.add('text-gray-600')
    }else{
        nav.classList.remove('bg-white')
        navText.classList.remove('text-gray-600')
    }
}

window.addEventListener('scroll', navChangeColor)

navSlide()

const servicesInfoToggler = () => {
  const info = document.getElementById('info')
  const webb = document.getElementById('webb')
  const design = document.getElementById('design')
  const hosting = document.getElementById('hosting')
  const ceo = document.getElementById('ceo')
  const button = document.querySelectorAll("#btn");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
      console.log("Button " + (i) + " was clicked");
      if(e.target.outerText === 'Webbutveckling'){
        info.classList.add('hidden')
        webb.classList.remove('hidden')
        design.classList.add('hidden')
        hosting.classList.add('hidden')
        ceo.classList.add('hidden')
      }else if(e.target.outerText === 'Design & UX'){
        info.classList.add('hidden')
        design.classList.remove('hidden')
        webb.classList.add('hidden')
        hosting.classList.add('hidden')
        ceo.classList.add('hidden')
      }else if(e.target.outerText === 'Hosting & förvaltning'){
        info.classList.add('hidden')
        design.classList.add('hidden')
        webb.classList.add('hidden')
        hosting.classList.remove('hidden')
        ceo.classList.add('hidden')
      }else{
        info.classList.add('hidden')
        design.classList.add('hidden')
        webb.classList.add('hidden')
        ceo.classList.remove('hidden')
        hosting.classList.add('hidden')
      }
    });
  }
}
servicesInfoToggler()

const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;
const timeOut = setTimeout('autoSlide', 1000)
console.log(slides);


document
  .getElementById('carousel-button-next')
  .addEventListener('click', moveToNextSlide);
document
  .getElementById('carousel-button-prev')
  .addEventListener('click', moveToPrevSlide);
  // Next on is to made carousel automaticly go to next slide...
function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}
 function autoSlide(){
    hideAllSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
  setTimeout(autoSlide, 5000);
 }
 
function moveToNextSlide() {
    hideAllSlides()
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  slides[slidePosition].classList.add('carousel-item-visible');
}
function moveToPrevSlide() {
    hideAllSlides()
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
  slides[slidePosition].classList.add('carousel-item-visible');
}
window.onload=autoSlide()
