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
  const button = document.querySelectorAll("#btn");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
      console.log("Button " + (i) + " was clicked");
      if(e.target.outerText === 'Webbutveckling'){
        info.classList.toggle('hidden')
        webb.classList.toggle('hidden')
      }
    });
  }
}
servicesInfoToggler()
