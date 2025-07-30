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



