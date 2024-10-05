const swiper = new Swiper('.slider-wrapper', {

    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets : true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
   breakpoints:{
    0:{
        slidePerView: 1,
    },
    768:{
        slidePerView: 2,
    },
    1024:{
        slidePerView: 3,
    }
   }

  })