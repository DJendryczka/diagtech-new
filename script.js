const navSlide = () => {
  const menuButton = document.getElementById("menu-button");
  const menu = document.getElementById("menu");

  menuButton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('nav-active')
  })
};

navSlide()
