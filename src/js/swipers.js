import Swiper from "swiper/bundle";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/bundle";

let sliders = document.querySelectorAll("._slider");
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains("swiper-build")) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add("swiper-slide");
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement("div");
      slider_wrapper.classList.add("swiper-wrapper");
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = "";
      slider.appendChild(slider_wrapper);
      slider.classList.add("swiper-bild");
    }
    if (slider.classList.contains("._gallery")) {
    }
  }
  slider_bild_callback();
}

function slider_bild_callback(params) {}

let main_slider = new Swiper(".main-slider__body", {
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: false,
  speed: 800,
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".control-main-slider__arrow_next",
    prevEl: ".control-main-slider__arrow_prev",
  },
  //   breakpoints: {
  //     320: {
  //       autoHeight: true,
  //     },
  //     768: {
  //       autoHeight: false,
  //     },
  //   },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
});
let slider_lots = new Swiper(".slider-lots__body", {
  observer: true,
  observeParents: true,
  slidesPerView: 3,
  spaceBetween: 0,
  autoHeight: false,
  speed: 800,
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".control-slider-lots__arrow_next",
    prevEl: ".control-slider-lots__arrow_prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    550: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
});
let slider_quotes = new Swiper(".slider-quotes__body", {
  effect: "fade",
  crossFade: true,
  observer: true,
  observeParents: true,
  slidesPerView: 1,
  spaceBetween: 0,
  autoHeight: false,
  speed: 1000,
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".control-slider-quotes__circle",
  },
  on: {
    lazyImageReady: function () {
      ibg();
    },
  },
});
