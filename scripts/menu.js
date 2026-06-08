document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  if (!navbar || !menuToggle || !navLinks) {
    return;
  }

  const openMenu = () => {
    menuToggle.classList.add("active");
    navLinks.classList.add("active");
    navbar.classList.add("menu-open");
    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu de navegação");
  };

  const closeMenu = () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    navbar.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
  };

  const toggleMenu = () => {
    const isOpen = navLinks.classList.contains("active");

    if (isOpen) {
      closeMenu();
      return;
    }

    openMenu();
  };

  menuToggle.addEventListener("click", toggleMenu);

  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});
