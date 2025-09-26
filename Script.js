document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".animated-bar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute("data-width");
                bar.style.width = width + "%";
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach((bar) => observer.observe(bar));
});

window.onload = function() {
    console.log('Page fully loaded'); // To check if the page is loaded
    const backToTopBtn = document.getElementById('back-to-top');
    console.log(backToTopBtn); // Check if button is found

    window.onscroll = function () {
        console.log('Scroll detected');
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

