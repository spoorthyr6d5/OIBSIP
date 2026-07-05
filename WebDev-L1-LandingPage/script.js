const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Small button animation

document.querySelectorAll(".shop-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-2px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});