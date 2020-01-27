const section1 = document.querySelector('.section-1');

window.addEventListener('scroll', () => {
	let offset = window.pageYOffset;
	section1.style.backgroundPositionY = offset * 0.75 + 'px';
});
