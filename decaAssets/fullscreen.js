"use strict";

//fullscreen
const slider = document.querySelector(".slider");
const fullscreenBtn = document.querySelector(".fullscreen").addEventListener("click", () => {
    slider.classList.add("slider__fullscreen");
});
