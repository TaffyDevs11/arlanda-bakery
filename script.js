// Function to handle the pre-loader
window.addEventListener('load', function() {
    // Select the preloader overlay element
    const preloader = document.getElementById('preloader');

    // Make the preloader fade out after the page is loaded
    preloader.style.opacity = '0';

    // Remove the element completely from the document after a short delay (for performance)
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 500); // Wait 0.5 seconds for the fade to finish
});
