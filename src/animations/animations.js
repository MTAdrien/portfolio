const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });

}, {
    threshold: 0.2
});

fadeSections.forEach((section) => {
    observer.observe(section);
});

const pageLoader = document.getElementById('page-loader');

window.addEventListener('load', () => {
  setTimeout(() => {
    pageLoader.classList.add('hidden');
  }, 1200);
});