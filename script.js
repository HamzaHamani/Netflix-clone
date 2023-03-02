// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal",
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// });
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ---------------------
let imgs = document.querySelectorAll(".movies");
let contet = document.querySelectorAll(".content");
let pichanger = document.querySelector(".pichanger");
let dd = document.querySelectorAll(".headerContent");
let btninfo = document.querySelector(".btn2");
dd.forEach((d) => {
  d.style.transitionProperty = "all";
  d.style.transitionDuration = "1s";
  d.style.transitionTimingFunction = "ease";
});
imgs.forEach((img) => {
  img.addEventListener("click", function (e) {
    e.preventDefault;

    let name = e.target.dataset.name; //getting the data name
    dd.forEach((d) => {
      d.style.opacity = 0;
      d.style.transitionProperty = "all";
      d.style.transitionDuration = "1s";
      d.style.transitionTimingFunction = "ease";
      console.log(d.closest(".headerContent"));
      //   console.log(d.querySelector());

      let current = `${name}h0`;
      console.log(current);
      if (d.classList.contains(current)) {
        d.style.opacity = 1;
      }
    });
    let current = document.querySelector(`.${name}`); // chosing curent element
    pichanger.setAttribute("src", `/imgs/${name}.jpg`);
    contet.forEach((c) => {
      c.classList.add("content-hidden");
    });
    current.classList.remove("content-hidden");
  });
});
