document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("mss-nav-site-slide");
  const navMenu = document.querySelector(".mssNavSiteSlide__nav");
  const navClose = document.getElementById("mss-nav-site-close");
  const navOpen = document.getElementById("mss-nav-site-open");
  const iconDefault = document.querySelector("#mss-nav-site-open .icon-default");
  const iconActive = document.querySelector("#mss-nav-site-open .icon-active");

  if (!nav || !navOpen) return;

  function openMenu() {
    nav.classList.add("is-open");
    document.body.style.overflow = "hidden";

    if (iconActive && iconDefault) {
      iconActive.classList.add("is-selected");
      iconDefault.classList.remove("is-selected");
    }
  }

  function closeMenu() {
    nav.classList.remove("is-open");
    document.body.style.overflow = "auto";

    if (iconActive && iconDefault) {
      iconActive.classList.remove("is-selected");
      iconDefault.classList.add("is-selected");
    }
  }

  function toggleMenu() {
    if (nav.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  navOpen.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  if (navClose) {
    navClose.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMenu();
    });
  }

  /*
    Cerrar al tocar el backdrop.
    Solo cierra si el click es directamente sobre .mssNavSiteSlide,
    no si el click ocurre dentro de .mssNavSiteSlide__nav.
  */
  nav.addEventListener("click", (e) => {
    if (e.target === nav) {
      closeMenu();
    }
  });

  /*
    Evita que clicks dentro del panel puedan propagarse al backdrop.
    No siempre sería necesario usando e.target === nav,
    pero ayuda a evitar efectos raros.
  */
  if (navMenu) {
    navMenu.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
});