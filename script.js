// script.js

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('img');
    const hiddenFact = 'Wangari Maathai was the first African woman to receive the Nobel Peace Prize!';
    
    img.addEventListener('click', () => {
        alert(hiddenFact);
    });
    
    const socialLinks = document.querySelectorAll('footer ul li a');
    socialLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            window.open(link.href, '_blank');
        });
    });

    let slideIndex = 0;
    showSlides();

    function showSlides() {
        const slides = document.querySelectorAll('.mySlides');
        slides.forEach(slide => slide.style.display = 'none');
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = 'block';
        setTimeout(showSlides, 2000); // Change slide every 2 seconds
    }
});

