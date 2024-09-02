document.addEventListener("DOMContentLoaded", function() {
    const sliderTrack = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = 420; // Her bir slide + margin toplam genişlik (400px + 10px * 2)

    function setPositionByIndex() {
        const currentTranslate = currentIndex * -slideWidth;
        sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    }

    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        setPositionByIndex();
    }

    setInterval(autoSlide, 3000); // Her 3 saniyede bir fotoğraf kaydırılır
});
