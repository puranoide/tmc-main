const formAddPost = document.getElementById("post-form-register");

formAddPost.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("submit");
  const formData = new FormData(this);
  objetoRegistro = {};
  const inputs = document.querySelectorAll(
    "#post-form-register input, #post-form-register textarea, #post-form-register select"
  );
  inputs.forEach((input) => {
    console.log(input.name, input.value);
    objetoRegistro[input.name] = input.value;
  });

  console.log(objetoRegistro);
  console.log(typeof objetoRegistro);
  //registrarMedico(objetoRegistro);
  //addPostApi(formData.get("title"), formData.get("content"), formData.get("enlace"), formData.get("image"));
  saveImageImgur("bac59c579ba9db1",objetoRegistro,formData.get("fotoPerfil"));
});

function saveImageImgur(idClient,objetoRegistro,linkFoto) {

    const formData = new FormData();
    formData.append('image', linkFoto);

    fetch(`https://api.imgur.com/3/image`, {
        method: 'POST',
        headers: {
            Authorization: `Client-ID ${idClient}`
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        if (data.success) {
            console.log(data);
            //console.log(objetoRegistro);
            //registrarMedico(objetoRegistro,data.data.link);    
        }
    })
    .catch(error => {
        console.log(error);
    });

}