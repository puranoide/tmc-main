const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let horariosSeleccionados = {};

function generarHorarios() {
  const duracion = parseInt(document.getElementById("duracionConsulta").value);
  const calendario = document.getElementById("calendario");
  calendario.innerHTML = "";

  if (!duracion || duracion <= 0) {
    alert("Ingresa un número válido de minutos");
    return;
  }

  // Cabecera de días
  calendario.appendChild(document.createElement("div")).className = "celda hora"; // celda vacía para la columna de horas

  dias.forEach(dia => {
    const diaHeader = document.createElement("div");
    diaHeader.className = "celda dia";
    diaHeader.textContent = dia;
    calendario.appendChild(diaHeader);
    horariosSeleccionados[dia] = [];
  });

  // Horas desde 9am hasta 9pm
  for (let minuto = 540; minuto < 1260; minuto += duracion) {
    const horaTexto = convertirHora(minuto);
    const celdaHora = document.createElement("div");
    celdaHora.className = "celda hora";
    celdaHora.textContent = horaTexto;
    calendario.appendChild(celdaHora);

    dias.forEach(dia => {
      const celda = document.createElement("div");
      celda.className = "celda";
      celda.textContent = horaTexto;

      celda.addEventListener("click", () => {
        const index = horariosSeleccionados[dia].indexOf(horaTexto);
        if (index === -1) {
          horariosSeleccionados[dia].push(horaTexto);
          celda.classList.add("seleccionado");
        } else {
          horariosSeleccionados[dia].splice(index, 1);
          celda.classList.remove("seleccionado");
        }
        console.log(horariosSeleccionados);
      });

      calendario.appendChild(celda);
    });
  }
}

function convertirHora(minutos) {
  const h = Math.floor(minutos / 60).toString().padStart(2, "0");
  const m = (minutos % 60).toString().padStart(2, "0");
  return `${h}:${m}`;
}


const formulario=document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  var datos = Object.fromEntries(new FormData(formulario));
  console.log("datos del formulario",datos);
    console.log("datos horario",horariosSeleccionados);

})