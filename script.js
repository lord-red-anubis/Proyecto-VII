// ==== MENÚ ACTIVO ====
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ==== TIPS DEL DÍA ====
const tips = [
  "Bebe al menos 2 litros de agua al día.",
  "Realiza estiramientos cada mañana.",
  "Evita el exceso de cafeína.",
  "Tómate 10 minutos diarios para meditar.",
  "Agradece algo cada día."
];
function mostrarTipAleatorio() {
  const tip = tips[Math.floor(Math.random() * tips.length)];
  document.getElementById("tips-grid").innerHTML = `<div class="card">🌟 ${tip}</div>`;
}
window.onload = mostrarTipAleatorio;

// ==== PERFIL LOCALSTORAGE ====
const formPerfil = document.querySelector("#perfil form");
formPerfil.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const intereses = document.getElementById("intereses").value;
  localStorage.setItem("perfil", JSON.stringify({ nombre, intereses }));
  alert("✅ Perfil guardado con éxito");
});

// ==== VALIDACIÓN DE FORMULARIOS ====
document.getElementById("registerForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Registro exitoso ✅ Bienvenido a Salud Integral");
});
document.getElementById("loginForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Inicio de sesión correcto 🔑");
});

// ==== PROGRESO DEL USUARIO ====
let progreso = 40;
const barra = document.getElementById("progressBar");
document.getElementById("aumentarProgreso").addEventListener("click", () => {
  if (progreso < 100) {
    progreso += 10;
    barra.style.width = progreso + "%";
  } else {
    alert("🎉 ¡Felicidades! Has completado tu meta semanal.");
  }
});

let index = 0;
const images = document.querySelectorAll('.carousel img');

function nextSlide() {
  index = (index + 1) % images.length;
  document.querySelector('.carousel').style.transform = `translateX(-${index * 100}%)`;
}

setInterval(nextSlide, 4000);
