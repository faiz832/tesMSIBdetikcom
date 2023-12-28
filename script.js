// === resopnsive navbar ===
hamburger = document.querySelector(".bi-list");
hamburger.onclick = function () {
  navbar = document.querySelector(".nav-item-group");
  navbar.classList.toggle("show-menu");
};

// === review card carousel ===
$(".reviews-slider").owlCarousel({
  autoplay: true,
  loop: true,
  slideSpeed: 3000,
  items: 3,
  nav: true,
  navText: [
    '<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6667 1.6665L1.33337 10.9998L10.6667 20.3332M1.33337 10.9998H22.6667" stroke="#5468E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    '<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.33337 10.9998H22.6667M13.3334 1.6665L22.6667 10.9998L13.3334 20.3332" stroke="#5468E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  ],
  margin: 5,
  dots: false,
  responsive: {
    1000: {
      items: 3,
    },
    570: {
      items: 2,
    },
    320: {
      items: 1,
    },
  },
});
