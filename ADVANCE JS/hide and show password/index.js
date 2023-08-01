function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password-input");
    const toggleButton = document.getElementById("toggle-button");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "Show";
    }
}
