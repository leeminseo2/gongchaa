$(function () {
  // Initialize the work slider
  gsap.registerPlugin(ScrollTrigger);

  const bestSlider = new Swiper('.best-slider', {
    loop: true,
    slidesPerView: 3,
    // spaceBetween: 50,

    centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
  });
  const newSlider = new Swiper('.new-slider', {
    loop: true,

    spaceBetween: 20,
    slidesPerView: 'auto',
    // centeredSlides: true,
    // Navigation arrows
    navigation: {
      nextEl: '.new-button-next',
      prevEl: '.new-button-prev',
    },
  });
});
