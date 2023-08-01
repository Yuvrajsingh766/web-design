document.addEventListener("DOMContentLoaded", () => {
    const showAlertButton = document.getElementById("showAlertButton");
    const clickableElements = document.querySelectorAll(".clickable-element");

    clickableElements.forEach(element => {
        element.addEventListener("click", () => {
            alert("You clicked on: " + element.textContent);
        });
    });

    showAlertButton.addEventListener("click", () => {
        alert("Button clicked!");
    });
});

