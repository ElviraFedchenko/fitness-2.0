// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';
import './vendor/tabs';
import './vendor/init-tabs';


const trainerSwiper = document.querySelector('.trainer__slider');
const reviewsSwiper = document.querySelector('.reviews__slider');

const checkTrainerSwiper = () => {
  if (trainerSwiper) {
    const swiper = new Swiper(trainerSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.trainer__button-next',
        prevEl: '.trainer__button-prev',
      },
      // Включение/Отключение перетаскивания на ПК
      simulateTouch: false,
      // Курсор перетаскивания
      grabCursor: false,
      // Количество слайдов для показа
      // slidesPerView: 4,
      // Отключение функционала, если слайдов меньше чем нужно
      watchOverflow: true,
      // Отступ между слайдами
      // spaceBetween: 39,
      // Количество пролистываемых слайдов
      // slidesPerGroup: 1,
      // Бесконечный слайдер
      loop: true,

      // // Автопрокрутка
      // autoplay: {
      //   // Пауза между прокруткой в мс
      //   delay: 1000,
      //   // Закончить на последнем слайде
      //   stopOnLastSlide: true,
      //   // Отключить после ручного переключения
      //   disableOnInteraction: false,
      // },

      // Скорость прокрутки - по умолчанию 300мс
      speed: 600,

      // //Брейкпоинты (адаптив)
      // //Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 40,
          slidesPerGroup: 1,
        },
      },

    });
  }
};


const checkReviewsSwiper = () => {
  if (reviewsSwiper) {
    const swiper = new Swiper(reviewsSwiper, {

      // Navigation arrows
      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },
      spaceBetween: 60,
      slidesPerView: 1,
    });
  }
};

export {checkReviewsSwiper, checkTrainerSwiper};
