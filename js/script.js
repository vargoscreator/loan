const headerBlock = document.querySelector('.header__block');
const headerMenu = document.querySelector('.header__menu');
const headerTop = document.querySelector('.header__top');
function resizeHandler() {
  const width = window.innerWidth;

  if (width < 781) {
    headerMenu.appendChild(headerBlock);
  } else {
    headerTop.appendChild(headerBlock);
  }
}
window.addEventListener('resize', resizeHandler);
resizeHandler();
document.addEventListener("DOMContentLoaded", function () {
    const menuBoxes = document.querySelectorAll('.header__menu-box');
    menuBoxes.forEach(box => {
        const menuTrigger = box.querySelector('.menu-trigger');
        menuTrigger.addEventListener('click', function(event) {
            event.stopPropagation();
            box.classList.toggle('active');
        });
        document.addEventListener('click', function(event) {
            if (!box.contains(event.target)) {
                box.classList.remove('active');
            }
        });
    });
    document.querySelectorAll('.circle-animate span').forEach(span => {
        span.addEventListener('animationstart', () => {
            setTimeout(() => {
                document.querySelectorAll('.circle-animate').forEach(element => {
                    element.classList.add('animate-off');
                });
                setTimeout(() => {
                    document.querySelectorAll('.circle-animate').forEach(element => {
                        element.classList.remove('animate-off');
                    });
                }, 1000);
            }, 3500);
        });
    });    
    const rotateAnimation = document.querySelector('.rotate-animation');
    rotateAnimation.addEventListener('animationiteration', () => {
        rotateAnimation.classList.toggle('animate-off');
    });       
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const body = document.querySelector('.body');
    headerBurger.addEventListener('click', function() {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('show');
        body.classList.toggle('no-scroll')
    });
    const leftRanges = document.querySelectorAll('.calculator__left-range');
    function updateRangeBackground(range) {
        const value = range.value;
        const max = range.getAttribute('max');
        const percent = (value / max) * 100;    
        const gradientStart = '#0070E0';
        const gradientEnd = '#D9D9D9';    
        const newGradient = `linear-gradient(to right, ${gradientStart} ${percent}%, ${gradientEnd} ${percent}%)`;
        range.style.background = newGradient;
    }    
    leftRanges.forEach(range => {
        updateRangeBackground(range)
        range.addEventListener('input', () => updateRangeBackground(range));
    });   
});