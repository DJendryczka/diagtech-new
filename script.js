const navSlide = () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener('click', () => {
    console.log('click')
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
