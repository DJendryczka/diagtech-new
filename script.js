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
    console.log('zmiana')
    if(window.scrollY >=95){
        nav.classList.add('bg-white')
    }else{
        nav.classList.remove('bg-white')
    }
}

window.addEventListener('scroll', navChangeColor)

navSlide()
