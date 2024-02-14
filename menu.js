const menuBtn = document.querySelector(".menu-btn");
const wrapper = document.querySelector(".wrapper");

document.querySelector('.menu-btn').addEventListener('click', function() {
  menuBtn.querySelector("i").classList.toggle("fa-xmark");
  wrapper.classList.toggle("open");

  // Obtén el elemento body
  const body = document.body;

  // Toggle la clase 'scroll-lock' al body
  body.classList.toggle('scroll-lock');
  document.querySelector('.menu').classList.toggle('open');
});

// Obtén todos los elementos de enlace con la clase 'link'
const links = document.querySelectorAll(".link");

// Itera sobre cada enlace y agrega un manejador de eventos
links.forEach(link => {
  link.addEventListener("click", function (event) {
    // Cierra el menú
    menuBtn.querySelector("i").classList.remove("fa-xmark");
    wrapper.classList.remove("open");

    // Elimina la clase 'scroll-lock' del body
    document.body.classList.remove('scroll-lock');

    // Obtén el valor del atributo 'href' del enlace
    const targetHref = this.getAttribute("href");

    // Redirige a la página correspondiente
    window.location.href = targetHref;
  });
});
