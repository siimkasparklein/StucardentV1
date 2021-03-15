let showMenu = false;
const mobileMenu = document.getElementById('mobile-menu');

function  toggleMenu() {
  
  if (showMenu === true){
    showMenu = false;
    mobileMenu.classList.add('hidden');
  }else {
    showMenu = true;
    mobileMenu.classList.remove('hidden');
  }
}