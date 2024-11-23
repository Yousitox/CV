console.log("Prueba111111");
console.warn("Beta");
alert("FACE BETA");

function botonalerta() {
  alert("ENVIADO CORRECTAMENTE");
}


function apertura() {
  document.getElementById("todo").style.marginLeft = "25%";
  document.getElementById("barralateral").style.width = "25%";
  document.getElementById("barralateral").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}

function cierre() {
  document.getElementById("todo").style.marginLeft = "0%";
  document.getElementById("barralateral").style.display = "none";
  document.getElementById("openNav").style.display = "inline-block";
}