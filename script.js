const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');

const navIds = ['nav-1', 'nav-2', 'nav-3', 'nav-4', 'nav-5'];

// Create constants dynamically
const navElements = {};
navIds.forEach((navId, index) => {
  navElements[`nav${index + 1}`] = document.getElementById(navId);
});

function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-active');
    // Toggle overlay slide animation
    toggleOverlaySlide(overlay.classList.contains('overlay-active'));
}

function toggleOverlaySlide(isOverlayActive) {
    if (isOverlayActive) {
      overlay.classList.remove('overlay-slide-left'); 
      overlay.classList.add('overlay-slide-right'); 
      
      nav1.classList.remove('slide-out-1');
      nav1.classList.add('slide-in-1');
      nav2.classList.remove('slide-out-2');
      nav2.classList.add('slide-in-2');
      nav3.classList.remove('slide-out-3');
      nav3.classList.add('slide-in-3');
      nav4.classList.remove('slide-out-4');
      nav4.classList.add('slide-in-4');
      nav5.classList.remove('slide-out-5');
      nav5.classList.add('slide-in-5');
    }
    else {
        overlay.classList.remove('overlay-slide-right');
        overlay.classList.add('overlay-slide-left');
        
        nav1.classList.remove('slide-in-1');
        nav1.classList.add('slide-out-1');
        nav2.classList.remove('slide-in-2');
        nav2.classList.add('slide-out-2');
        nav3.classList.remove('slide-in-3');
        nav3.classList.add('slide-out-3');
        nav4.classList.remove('slide-in-4');
        nav4.classList.add('slide-out-4');
        nav5.classList.remove('slide-in-5');
        nav5.classList.add('slide-out-5');
    }
       
}

// Add event listener
menuBars.addEventListener('click', toggleNav);

Object.values(navElements).forEach((navElement) => {
  navElement.addEventListener('click', toggleNav);
});




