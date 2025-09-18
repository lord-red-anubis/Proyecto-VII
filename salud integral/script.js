// Lista de tips diarios
const tips = [
  "Bebe al menos 2 litros de agua al día.",
  "Duerme entre 7 y 8 horas cada noche.",
  "Camina al menos 30 minutos diarios.",
  "Practica respiración consciente durante 5 minutos.",
  "Consume frutas y verduras en cada comida.",
  "Evita el exceso de azúcares y grasas.",
  "Mantén una postura correcta al trabajar.",
  "Dedica tiempo a un pasatiempo relajante."
];

// Seleccionar tip aleatorio
function mostrarTipAleatorio() {
  const tipDelDia = tips[Math.floor(Math.random() * tips.length)];
  const tipsGrid = document.getElementById("tips-grid");
  
  // Mostrar solo 1 tip aleatorio destacado
  tipsGrid.innerHTML = `<div class="card">🌟 Tip del día: ${tipDelDia}</div>`;
}

// Ejecutar al cargar la página
window.onload = mostrarTipAleatorio;
