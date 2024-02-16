const slides = document.querySelectorAll(".slides");
let slideIndex = 0;
const buttonTexts = ["Software Development", "Web Development", "UI/UX Design", "Product Development", "App Development"];
let buttonTextIndex = 0;

showSlides();
changeButtonText(); // Start changing button text immediately

function showSlides() {
    slides.forEach(slide => slide.style.display = "none");
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    // Update button text with corresponding index
    const welcomeTextPlaceholder = slides[slideIndex - 1].querySelector(".welcome-text");
    welcomeTextPlaceholder.innerHTML = generateWelcomeText("Lorem ipsum <u>dolor</u> sit amet.", buttonTexts[buttonTextIndex]);

    setTimeout(showSlides, 3000);
}

function generateWelcomeText(subtitle, button) {
    return `
        <p>We at</p>
        <h1>BRIX</h1>
        <p>${subtitle}</p><br>
        <button type="button" id="dynamic-button">${button}</button>
    `;
}

function changeButtonText() {
    const dynamicButton = document.getElementById("dynamic-button");
    dynamicButton.innerHTML = buttonTexts[buttonTextIndex];
    buttonTextIndex = (buttonTextIndex + 1) % buttonTexts.length; // Move to the next index cyclically
    setTimeout(changeButtonText, 3000); // Call the function again after 3 seconds
}
