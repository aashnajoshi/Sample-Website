const slides = document.querySelectorAll(".slides");
let slideIndex = 0;

showSlides();

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}


// Function to generate welcome text dynamically
function generateWelcomeText(title, subtitle) {
    return `
        <p>We at</p>
        <h1>${title}</h1>
        <p>${subtitle}</p>
    `;
}

slides.forEach(slide => {
    const welcomeTextPlaceholder = slide.querySelector(".welcome-text");
    welcomeTextPlaceholder.innerHTML = generateWelcomeText("BRIX", "Lorem ipsum <u>dolor</u> sit amet.");
});
