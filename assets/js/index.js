const formularioconsulta = document.getElementById("contact-us");
const alertacontacto = document.getElementById("mensajedecontacto");
formularioconsulta.addEventListener("submit", function (event) {
  event.preventDefault();
  var datos = Object.fromEntries(new FormData(formularioconsulta));
  console.log(datos);
  generarConsulta(datos);
})
function generarConsulta(consultaobj) {
  const datos = {
    action: "generarConsulta",
    ...consultaobj,
  };
  console.log(datos, "generando consulta");
  fetch("controllers/contactos.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        crearAlertaContacto("Solicitud enviada con éxito", 1);
      } else {
        crearAlertaContacto("Error al enviar la solicitud", 0);
      }
    })
    .catch((error) => {
      console.error(error);
      crearAlertaContacto("Error de red", 0);
    });
}

function crearAlertaContacto(mensaje, tipo) {
  //limpiar alerta
  alertacontacto.innerHTML = "";
  //validar tipo de alerta

  if (tipo == 1) {
    var divalerta = document.createElement("div");
    divalerta.setAttribute("role", "alert");
    divalerta.setAttribute("class", "rounded-md border border-gray-300 bg-green-500 p-4 mt-4");
    var divalertacontenido = document.createElement("div");
    divalertacontenido.setAttribute("class", "flex items-start gap-4");
    var divalertatexto = document.createElement("div");
    divalertatexto.setAttribute("class", "flex-1 text-center");
    var strong = document.createElement("strong");
    strong.setAttribute("class", "font-medium text-gray-900 dark:text-white");
    var textonombre = document.createTextNode(mensaje);
    strong.appendChild(textonombre);
    divalertatexto.appendChild(strong);
    divalertacontenido.appendChild(divalertatexto);
    divalerta.appendChild(divalertacontenido);
    alertacontacto.appendChild(divalerta);
    return;
  } else {
    var divalerta = document.createElement("div");
    divalerta.setAttribute("role", "alert");
    divalerta.setAttribute("class", "rounded-md border border-gray-300 bg-red-500 p-4 mt-4");
    var divalertacontenido = document.createElement("div");
    divalertacontenido.setAttribute("class", "flex items-start gap-4");
    var divalertatexto = document.createElement("div");
    divalertatexto.setAttribute("class", "flex-1 text-center");
    var strong = document.createElement("strong");
    strong.setAttribute("class", "font-medium text-gray-900 dark:text-white");
    var textonombre = document.createTextNode(mensaje);
    strong.appendChild(textonombre);
    divalertatexto.appendChild(strong);
    divalertacontenido.appendChild(divalertatexto);
    divalerta.appendChild(divalertacontenido);
    alertacontacto.appendChild(divalerta);
    return;
  }



}


