document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".gallery-swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
        },
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

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


    const map = L.map('mapid').setView([40.7138, -73.9572], 13); // Замените координаты на реальное местоположение

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([40.7128, -73.9572]).addTo(map) // Замените координаты на реальное местоположение
        .bindPopup('AutoGlow')
        .openPopup();
});


// Функция для установки cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}



// Функция для получения cookie
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(`${name}=`)) {
            return cookie.substring(name.length + 1);
        }
    }
    return null;
}

// Проверка и показ баннера
document.addEventListener('DOMContentLoaded', () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptButton = document.getElementById('accept-cookies');

    // Если пользователь ещё не принял cookies, показываем баннер
    if (!getCookie('cookiesAccepted')) {
        cookieBanner.style.display = 'block';
    }

    // При клике на "Accept" скрываем баннер и сохраняем флаг
    acceptButton.addEventListener('click', () => {
        setCookie('cookiesAccepted', 'true', 365); // Устанавливаем cookie на 1 год
        cookieBanner.style.display = 'none';
    });
});


const form = document.getElementById('serviceForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    window.location.href = 'thank-you-page.html';
});



flatpickr("#date", {
    locale: "en" // Устанавливаем английский язык
});

