const slides = document.querySelectorAll(".slides");
let slideIndex = 0;
showSlides();

slides.forEach(slide => {
    const welcomeTextPlaceholder = slide.querySelector(".welcome-text");
    welcomeTextPlaceholder.innerHTML = generateWelcomeText("Lorem ipsum <u>dolor</u> sit amet.");
});

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

function generateWelcomeText(subtitle) {
    return `
        <p>We at</p>
        <h1>BRIX</h1>
        <p>${subtitle}</p>
    `;
}