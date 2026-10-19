/* Peter Garner Jones — site behaviour.
   Vanilla JS only. Every enhancement degrades gracefully:
   without JS the page renders fully (nav lists, tabs, FAQ included). */

(function () {
  "use strict";

  // Gate CSS-only enhancements (reveal animations) behind a .js class.
  document.documentElement.classList.add("js");

  /* ----- Sticky header shadow ----- */
  var header = document.getElementById("siteHeader");
  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ----- Mobile navigation ----- */
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");

  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Close the panel after choosing a destination.
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ----- Energy-practice tabs (ARIA pattern) ----- */
  var tablist = document.querySelector(".tabs__list");
  if (tablist) {
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (t) {
      return document.getElementById(t.getAttribute("aria-controls"));
    });

    var activate = function (index) {
      tabs.forEach(function (tab, i) {
        var active = i === index;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
        tab.tabIndex = active ? 0 : -1;
        panels[i].classList.toggle("is-active", active);
        panels[i].hidden = !active;
      });
    };

    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { activate(i); });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
        if (next !== null) {
          e.preventDefault();
          activate(next);
          tabs[next].focus();
        }
      });
    });
  }

  /* ----- FAQ: keep a single answer open ----- */
  var faqItems = document.querySelectorAll(".faq__item");
  faqItems.forEach(function (item) {
    item.addEventListener("toggle", function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ----- Reveal on scroll ----- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ----- Footer year ----- */
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
