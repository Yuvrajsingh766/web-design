// Function to open the modal box with specific content based on button clicked
function openModal(buttonNumber) {
    const modal = document.getElementById('myModal');
    const modalContent = modal.querySelector('.modal-content');

    // Set the content based on the button clicked
    switch (buttonNumber) {
        case 1:
            modalContent.innerHTML = "<p>This is the content of Button 1.</p>";
            break;
        case 2:
            modalContent.innerHTML = "<p>This is the content of Button 2.</p>";
            break;
        case 3:
            modalContent.innerHTML = "<p>This is the content of Button 3.</p>";
            break;
        default:
            modalContent.innerHTML = "<p>Invalid button number.</p>";
    }

    modal.style.display = 'block';
}

// Function to close the modal box
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}
