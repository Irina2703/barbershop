import './style.css';


// Smooth Scrolling für Navigation
document.querySelectorAll('.header-nav a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const target = document.querySelector(
      link.getAttribute('href')
    );

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


// Buttons
document
  .querySelectorAll('.btn, .black-btn, .btn-book')
  .forEach((button) => {
    button.addEventListener('click', () => {
      alert('Booking-System kommt hier hin.');
    });
  });
