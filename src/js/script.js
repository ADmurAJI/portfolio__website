"use strict";

// Бургер меню

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElem = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__list");
const menuSosial = document.querySelector(".menu__social");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

// Закрыть меню

const closeMenu = function (value) {
  value.addEventListener("click", () => {
    menu.classList.remove("active");
  });
};

closeMenu(closeElem);
closeMenu(menuList);
closeMenu(menuSosial);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && menu.classList.contains("active")) {
    menu.classList.remove("active");
  }
});

// Автоматическое заполнение процентов

const counters = document.querySelectorAll(".skills__ratings-counter"),
  lines = document.querySelectorAll(".skills__ratings-line span");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});

// Плавный переход к секциям

const btnScrollToAbout = document.querySelector(".scroll__about");
const aboutme = document.querySelector("#aboutme");

btnScrollToAbout.addEventListener("click", function () {
  aboutme.scrollIntoView({ behavior: "smooth" });
});

const btnScrollToPortfolio = document.querySelector(".scroll__portfolio");
const portfolio = document.querySelector("#portfolio");

btnScrollToPortfolio.addEventListener("click", function () {
  portfolio.scrollIntoView({ behavior: "smooth" });
});

// Появление частей сайта

const allSection = document.querySelectorAll(".section");

const appearanceSection = function (entries, observer) {
  const entry = entries[0];

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section__hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(appearanceSection, {
  root: null,
  threshold: 0.2,
});

allSection.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section__hidden");
});
