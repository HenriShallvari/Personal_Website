'use strict'
const hamburger = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
})