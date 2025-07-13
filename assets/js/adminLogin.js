const loginform=document.getElementById("login-form");

loginform.addEventListener("submit", function (event) {
    event.preventDefault();
    var datos = Object.fromEntries(new FormData(loginform));
    console.log(datos);
    login(datos);
})

function login(datos){

    var data={
        action:"login",
        email:datos.email,
        password:datos.password
    }

    fetch("../controllers/admin.php",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    })
}