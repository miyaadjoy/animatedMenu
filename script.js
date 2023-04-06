

const header = document.querySelector('header');
const body = document.querySelector('body');
const toggleBtn = document.querySelector('.header__toggle');
const overlayImg = document.querySelector('.overlay__image');
const overlayMenu = document.querySelector('.overlay__menu');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {

    header.classList.toggle('toggle');
    body.classList.toggle('noscroll');

    if (header.classList.contains('toggle')) {//toggle menu is open
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        overlayImg.classList.remove('fade-out-left');
        overlayImg.classList.add('fade-in-right');

        overlayMenu.classList.remove('fade-out-right');
        overlayMenu.classList.add('fade-in-left');

        
    } else {//toggle menu is closed
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        overlayImg.classList.remove('fade-in-right');
        overlayImg.classList.add('fade-out-left');

        overlayMenu.classList.remove('fade-in-left');
        overlayMenu.classList.add('fade-out-right');
    }

});