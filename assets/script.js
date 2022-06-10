"use strict";

const navLinks = document.querySelectorAll(".nav__link");
const tabs = document.querySelector(".tabs").children;
const tabScroll = document.querySelector(".tabs");
const menuOutline = document.querySelector(".menu__outline");
const nav = document.querySelector(".nav");

//////////////////////////////////////////
//Website loop

let isStart = true;
let isMobile;
let isNavOpen = false;

const loop = setInterval(() => {
    if (window.innerWidth >= 736 && (isStart || !isMobile)) {
        isStart = false;
        isMobile = true;
        nav.style.display = "flex";
    } else if (window.innerWidth < 736 && !isNavOpen && (isStart || isMobile)) {
        isStart = false;
        isMobile = false;
        nav.style.display = "none";
    }
}, 10)

//////////////////////////////////////////
//Switching tabs

document.querySelector(".nav__links").addEventListener("click", (e) => {
    //checks if not clicking on a nav__link
    if (!e.target.classList.contains('nav__link')) return;
    //Set id to tab num and resets hidden and active classes
    const id = e.target.dataset.tab;
    navLinks.forEach((navLink, i) => {
        tabs[i].classList.add("hidden");
        navLink.classList.remove("link__active");
    });
    //Enables selected tab using id value
    tabs[id].classList.remove("hidden");
    navLinks[id].classList.add("link__active");
    if (!isMobile) closeNav();
});

//////////////////////////////////////////

//Mobile Nav
menuOutline.addEventListener("click", () => {
    if (menuOutline.name == "close-outline") {
        closeNav();
    } else if (menuOutline.name == "menu-outline") {
        menuOutline.name = "close-outline";
        nav.classList.add("fade");
        nav.style.display = "flex";
        isNavOpen = true;
    }
});

function closeNav() {
    menuOutline.name = "menu-outline";
    nav.style.display = "none";
    nav.classList.remove("fade");
    isNavOpen = false;
}

///////////////////////////////////////////

//Lazy load

const images = document.querySelectorAll(".lazy-load");

images.forEach((image) => {
    image.src = image.dataset.src;
    image.addEventListener("load", () => {
        image.classList.remove("lazy-load");
    });
});

/////////////////////////////////////////////

//Social Icon Links

// document.querySelector(".social__1").addEventListener("click", () => {
//     window.open("discord.com", "_blank");
// });

// document.querySelector(".social__2").addEventListener("click", () => {
//     window.open("github.com", "_blank");
// });

// document.querySelector(".social__3").addEventListener("click", () => {
//     window.open("instagram.com", "_blank");
// });

// document.querySelector(".social__4").addEventListener("click", () => {
//     window.open("twitter.com", "_blank");
// });
