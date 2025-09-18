// Función que retorna una promesa
function cargarDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.3; // 70% éxito, 30% error
      if (exito) {
        resolve("✅ Datos cargados correctamente.");
      } else {
        reject("❌ Error al cargar los datos.");
      }
    }, 2000); // Simula retraso de 2 segundos
  });
}

// Manejo de la promesa
document.getElementById("btnPromesa").addEventListener("click", () => {
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Cargando datos... ⏳";

  cargarDatos()
    .then((mensaje) => {
      resultado.textContent = mensaje;
    })
    .catch((error) => {
      resultado.textContent = error;
    });
});