const parallax = document.getElementById('parallax');

window.addEventListener('scroll', () => {
    let offset = window.pageYOffset; // See how much user have scrolled from the top
    parallax.style.backgroundPositionY = offset * 0.75 + 'px';
});
