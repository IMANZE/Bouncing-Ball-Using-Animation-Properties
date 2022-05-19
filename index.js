const btn = document.getElementById('toggleButton');
const circle = document.getElementById('animatedCircle');

btn.addEventListener('click', () => {
    circle.classList.toggle('running');
});