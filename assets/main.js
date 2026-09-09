/* Chantale Streeting — progressive enhancement only.
   The page is fully functional with this file absent or blocked. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  var reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ---- Current year in footer ---- */
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = String(new Date().getFullYear());

  /* ---- Sticky header state ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // Close after tapping a link
    header.querySelectorAll(".nav-links a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Scroll reveal ---- */
  var revealables = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealables.forEach(function (el) {
      el.classList.add("is-in");
    });
  } else {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    revealables.forEach(function (el) {
      io.observe(el);
    });
  }

  /* ---- Portrait: mark when the real photo loads ---- */
  var portrait = document.querySelector(".portrait");
  var portraitImg = portrait && portrait.querySelector("img");
  if (portrait && portraitImg) {
    var hideImg = function () {
      portrait.classList.remove("has-img");
      portraitImg.style.display = "none";
    };
    var resolve = function () {
      if (portraitImg.naturalWidth > 1) {
        portrait.classList.add("has-img");
        portraitImg.style.display = "";
      } else {
        hideImg();
      }
    };
    if (portraitImg.complete) resolve();
    portraitImg.addEventListener("load", resolve);
    portraitImg.addEventListener("error", hideImg);
  }
})();
