document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.feature, .service-card, .pricing-card');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }; // Здесь закрывается функция animateOnScroll

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Вызов функции после определения
});


const form = document.getElementById('serviceForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    window.location.href = 'thank-you-page.html';
});
