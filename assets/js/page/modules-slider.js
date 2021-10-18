"use strict";

$("#slider1").owlCarousel({
  // items: 1,
  // nav: true,
  items:1,
  lazyLoad:true,
  loop:true,
  margin:10,
  nav: true,
  navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  autoplay:true,
  dots: false,
  // autoplayTimeout:1000,
  autoplayHoverPause:true
});
