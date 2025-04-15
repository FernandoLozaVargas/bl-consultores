document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Cerrar el menú desplegable si está abierto (opcional para experiencia en móviles)
    const dropdown = this.closest(".dropdown");
    if (dropdown && dropdown.classList.contains("open")) {
      dropdown.classList.remove("open");
    }
  });
});

// JavaScript para el menú desplegable
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener("click", function (e) {
    e.preventDefault();
    this.closest(".dropdown").classList.toggle("open");
  });

  // Cerrar el menú desplegable si se hace clic fuera de él
  document.addEventListener("click", function (e) {
    if (
      !e.target.closest(".dropdown") &&
      document.querySelector(".dropdown.open")
    ) {
      document.querySelector(".dropdown.open").classList.remove("open");
    }
  });
}
