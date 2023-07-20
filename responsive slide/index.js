const slider = document.querySelector('.slider');
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;

slider.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startPos = e.clientX;
    animationID = requestAnimationFrame(animation);
    slider.classList.add('grabbing');
});

slider.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const currentPosition = e.clientX;
        const moveAmount = currentPosition - startPos;
        currentTranslate = prevTranslate + moveAmount;
    }
});

slider.addEventListener('mouseup', () => {
    cancelAnimationFrame(animationID);
    isDragging = false;
    prevTranslate = currentTranslate;
    slider.classList.remove('grabbing');
});

slider.addEventListener('mouseleave', () => {
    cancelAnimationFrame(animationID);
    isDragging = false;
    slider.classList.remove('grabbing');
});

function animation() {
    slider.style.transform = `translateX(${currentTranslate}px)`;
    if (isDragging) {
        animationID = requestAnimationFrame(animation);
    }
}
