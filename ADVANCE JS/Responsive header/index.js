document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const navLinks = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});
