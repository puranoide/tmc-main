const formularioconsulta=document.getElementById("contact-us");

formularioconsulta.addEventListener("submit",function(event){
    event.preventDefault();
    var datos=Object.fromEntries(new FormData(formularioconsulta));
    console.log(datos);
    generarConsulta(datos);
})
function generarConsulta(consultaobj) {

  const datos = {
    action: "generarConsulta",
    ...consultaobj,
  };
  console.log(datos,"generando consulta");
  fetch("controllers/contactos.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}