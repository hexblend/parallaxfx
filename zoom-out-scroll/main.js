const t1 = document.querySelector('.text1');
const t2 = document.querySelector('.text2');
const t3 = document.querySelector('.text3');
const t4 = document.querySelector('.text4');
const t5 = document.querySelector('.text5');
const section2 = document.querySelector('.section2');

// Todo:
// - Make a continous scrolling while stopping in a single section
// - Do animations on that section while scrolling

window.addEventListener('scroll', () => {
    let sectionPos = section2.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (sectionPos <= 0) {
        section2.style.position = 'fixed';
        section2.style.marginTop = -100 + 'vh';
    }
});
