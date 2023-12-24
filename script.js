function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // You can use 'auto' or 'smooth' for smooth scrolling
  });
}
