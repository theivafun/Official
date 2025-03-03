// script.js

// Wait for the DOM to load before executing code
document.addEventListener("DOMContentLoaded", function() {
  console.log("Welcome to My Book Showcase website!");

  // Create a 'Scroll to Top' button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.textContent = "Scroll to Top";
  scrollToTopButton.style.position = 'fixed';
  scrollToTopButton.style.bottom = '20px';
  scrollToTopButton.style.right = '20px';
  scrollToTopButton.style.padding = '10px 15px';
  scrollToTopButton.style.border = 'none';
  scrollToTopButton.style.borderRadius = '5px';
  scrollToTopButton.style.backgroundColor = '#007BFF';
  scrollToTopButton.style.color = '#fff';
  scrollToTopButton.style.cursor = 'pointer';

  // Add a click event to scroll smoothly to the top of the page
  scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Append the button to the body of the page
  document.body.appendChild(scrollToTopButton);
});
