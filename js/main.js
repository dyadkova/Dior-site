const swiperTop = new Swiper('.top__swiper', {
    // 
    effect: 'fade',
    utoplay: {
    delay: 2500,
    disableOnInteraction: false,
    }, 
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  
  });
  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  document.querySelectorAll('.accordion__triger').forEach((item) => {
    item.addEventListener('click', () => {
      item.parentNode.classList.toggle('accordion__item-active')
    })
  }); 