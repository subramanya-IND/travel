// Simple form handler
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for contacting Discover Karnataka Tours! We'll get back to you soon.");
        form.reset();
    });
});
