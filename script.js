const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const navIds = ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5'];
const navItems = navIds.map((id) => {
  return document.getElementById(id)
});

function toggleClass(element, classBefore, classAfter) {
  element.classList.replace(classBefore, classAfter)
};

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    // Toggle overlay slide animation
    toggleOverlaySlide(overlay.classList.contains('overlay-active'));
};

function toggleOverlaySlide(isOverlayActive) {
    let directionsOverlay = isOverlayActive? ['left', 'right'] :['right', 'left'];
    let directionsNav = isOverlayActive? ['out', 'in']:['in', 'out'];
      //Animate in overlay      
      toggleClass(overlay, 
        `overlay-slide-${directionsOverlay[0]}`, 
        `overlay-slide-${directionsOverlay[1]}`);
      
        //Animate in nav items
        navItems.forEach((navItem, index) => {
        console.log('checking toggle of nav items', `slide-${directionsNav[0]}-${index+1}`);
        toggleClass(navItem, 
          `slide-${directionsNav[0]}-${index+1}`, 
          `slide-${directionsNav[1]}-${index+1}`)
      })
 }

// Add event listeners
menuBars.addEventListener('click', toggleNav);
navItems.forEach((navItem) => {
  navItem.addEventListener('click', toggleNav)
});

