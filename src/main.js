import './style.css';


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';




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


 
 /*ocument
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
*/



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



 const reviewsSwiper =
    document.querySelector('.customer-reviews-swiper');

  if (reviewsSwiper) {

    new Swiper(reviewsSwiper, {

      modules: [
        Navigation,
        Pagination
      ],

      loop: true,

      slidesPerView: 1,

      spaceBetween: 20,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },

      breakpoints: {

        768: {
          slidesPerView: 2
        },

        1024: {
          slidesPerView: 3
        }

      }

    });

  }
});

