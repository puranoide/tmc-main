const formularioconsulta=document.getElementById("contact-us");

formularioconsulta.addEventListener("submit",function(event){
    event.preventDefault();
    var datos=Object.fromEntries(new FormData(formularioconsulta));
    console.log(datos);
})
function generarConsulta(consultaobj) {
  const datos = {
    action: "generarConsulta",
    consulta: consultaobj,
  };

  fetch("controllers/consultas.php", {
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