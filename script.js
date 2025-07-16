function toggleMenu() {
  const menu = document.querySelector(".mobile-menu-links");
  const icon = document.querySelector(".hamburger-icon");
  
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.querySelector(".mobile-menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  
  if (menu.classList.contains("open") && 
      !hamburgerMenu.contains(event.target)) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  }
});

// Close menu on escape key
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    const menu = document.querySelector(".mobile-menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      icon.classList.remove("open");
    }
  }
});
