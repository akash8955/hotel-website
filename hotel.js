const nav = document.querySelector(".navbar");
const navBar = document.querySelectorAll(".nav-link");
const navColapse = document.querySelector(".navbar-collapse.collapse");

// function for scroll-bar
window.onscroll = () => {
  if (document.documentElement.scrollTop > 40) {
    nav.classList.add("header-scrolled");
  }
  else {
    nav.classList.remove("header-scrolled")
  }
}

// function for hide navbar in mobile-view
navBar.forEach((a) => {
  a.addEventListener("click", () => {
    navColapse.classList.remove("show")
  })
})

// for counter in service section
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);


  }
  counter("count1", 0, 1287, 3000);
  counter("count2", 100, 1345, 2500);
  counter("count3", 12, 600, 2000);
  counter("count4", 101, 890, 1800);
})




























// for swipper
const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
});