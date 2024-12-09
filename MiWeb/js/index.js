console.log("Prueba111111");
console.warn("Beta");
alert("FACE BETA");

/* Boton alerta */
function botonalerta() {
  alert("ENVIADO CORRECTAMENTE");
}

/* Barra lateral */
document.getElementById("toggleButton").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
});
