"use strict";

const currentWindow = window.location.pathname.split("/").pop();
const navTabs = document.querySelectorAll(".nav__link");
//website loop
let websiteLoop = setInterval(() => {
    const scrollTop = document.querySelector("html").scrollTop;
    const stickyNav = document.querySelector(".sticky__nav");
    if (scrollTop > 100) {
        stickyNav.style.display = "flex";
    } else {
        stickyNav.style.display = "none";
    }
}, 3);

