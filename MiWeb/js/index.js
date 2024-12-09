console.log("Prueba111111");
console.warn("Beta");
alert("FACE BETA");

function botonalerta() {
  alert("ENVIADO CORRECTAMENTE");
}


document.getElementById("toggleButton").addEventListener("click", function () {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
});
