// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle && navToggle.addEventListener('click', () => {
  if (!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
});

// Fill year
document.getElementById('year').textContent = new Date().getFullYear();

// Simple form validation (client-side)
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill all fields before sending.');
      return false;
    }
    // if using Formspree or similar the form will submit
    // Optionally show a quick thanks message for UX
    alert('Thanks! Your message will be sent.');
  });
}
