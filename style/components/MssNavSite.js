
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mss-nav-site");
  const navMenu = document.querySelector(".mssNavSite__nav");
  const navClose = document.getElementById("mss-nav-site-close");
  const navOpen = document.getElementById("mss-nav-site-open");
  const iconDefault = document.querySelector("#mss-nav-site-open .icon-default");
  const iconActive = document.querySelector("#mss-nav-site-open .icon-active");
  const menuGap = 4;

function openMenu() {
  nav.classList.toggle("is-open");

  if (nav.classList.contains("is-open")) {
      const triggerRect = navOpen.getBoundingClientRect();
      navMenu.style.top = `${triggerRect.bottom + menuGap}px`;
      navMenu.style.height = `calc(100vh - ${triggerRect.bottom + menuGap}px)`;
    }

    if(window.innerWidth < 500) {
      navMenu.style.top = 0;
      navMenu.style.height = "100dvh"
    }
  }

  /* Outside click */
  /* document.addEventListener("click", (e) => {
    if (!nav.contains(e.target)) {
  nav.classList.remove("is-open");
    }
  }); */

if (navClose) {
  navClose.addEventListener("click", () => {
    console.log("close");
    document.body.style.overflow = "auto";
    nav.classList.remove("is-open");
    if (iconActive && iconDefault) {
      iconActive.classList.remove("is-selected");
      iconDefault.classList.add("is-selected");
    }
  });
  }

if (navOpen) {
  navOpen.addEventListener("click", () => {
    document.body.style.overflow = document.body.style.overflow === "hidden" ? "auto" : "hidden";
    if (iconActive && iconDefault) {
      iconActive.classList.toggle("is-selected");
      iconDefault.classList.toggle("is-selected");
    }
    openMenu();
  });
}
});