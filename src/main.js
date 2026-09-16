import './style.css';


// ========================================
// HEADER UND FOOTER LADEN
// ========================================

async function ladeTemplate(id, datei) {

  const element = document.getElementById(id);

  if (!element) {
    return;
  }

  try {

    const response = await fetch(datei);

    if (!response.ok) {
      throw new Error(
        `Fehler beim Laden von ${datei}: ${response.status}`
      );
    }

    const html = await response.text();

    element.innerHTML = html;

  } catch (error) {

    console.error(
      `Fehler beim Laden von ${datei}:`,
      error
    );

  }
}


// ========================================
// SEITE WIRD GELADEN
// ========================================

document.addEventListener('DOMContentLoaded', async () => {

  // Header laden
  await ladeTemplate(
    'header-container',
    '/header.html'
  );


  // Footer laden
  await ladeTemplate(
    'footer-container',
    '/footer.html'
  );


  // ========================================
  // NAVIGATION
  // ========================================

  document
    .querySelectorAll('.header-nav a')
    .forEach((link) => {

      link.addEventListener('click', (event) => {

        const href =
          link.getAttribute('href');


        // Nur Links mit #
        if (
          href &&
          href.startsWith('#')
        ) {

          event.preventDefault();

          const target =
            document.querySelector(href);

          if (target) {

            target.scrollIntoView({
              behavior: 'smooth'
            });

          }

        }

      });

    });


  // ========================================
  // BOOKING BUTTONS
  // ========================================

  document
    .querySelectorAll(
      '.btn, .black-btn, .btn-book, .consultation-button'
    )
    .forEach((button) => {

      button.addEventListener('click', () => {

        alert(
          'Booking-System kommt hier hin.'
        );

      });

    });


  // ========================================
  // CONTACT FORM
  // ========================================

  const contactForm =
    document.getElementById('contactForm');


  if (contactForm) {

    contactForm.addEventListener(
      'submit',
      (event) => {

        event.preventDefault();

        alert(
          'Vielen Dank für deine Nachricht!'
        );

        contactForm.reset();

      }
    );

  }

});