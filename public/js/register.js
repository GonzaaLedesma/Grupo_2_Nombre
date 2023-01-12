window.addEventListener("load", function () {
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function (evento) {

    function validateForm() {
      let errorDiv = document.querySelector(".errorTxt");
      let avisoErrorTxt = document.querySelector(".avisoErrorTxt");
      let texAviso = document.querySelector(".texAviso");

      let inputNombre = form.elements.nombre;
      if (inputNombre.value === "") {
        inputNombre.classList.add("errorBorder");
        errorDiv.innerHTML = "Tienes que escribir un nombre";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputNombre.classList.remove("errorBorder");
        inputNombre.classList.add("goodBorder");
      }
      let inputApellido = form.elements.apellido;
      if (inputApellido.value === "") {
        inputApellido.classList.add("errorBorder");
        errorDiv.innerHTML = "Tienes que escribir un apellido";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputApellido.classList.remove("errorBorder");
        inputApellido.classList.add("goodBorder");
      }
      let inputUsuario = form.elements.nombre_usuario;
      if (inputUsuario.value === "") {
        inputUsuario.classList.add("errorBorder");
        errorDiv.innerHTML = "Tienes que escribir un nombre de usuario";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputUsuario.classList.remove("errorBorder");
        inputUsuario.classList.add("goodBorder");
      }
      let inputEmail = form.elements.email;
      if (inputEmail.value === "") {
        inputEmail.classList.add("errorBorder");
        errorDiv.innerHTML = "Tienes que escribir un correo electrónico";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputEmail.classList.remove("errorBorder");
        inputEmail.classList.add("goodBorder");
      }
      let inputContrasenia = form.elements.contrasenia;
      if (inputContrasenia.value === "") {
        inputContrasenia.classList.add("errorBorder");
        errorDiv.innerHTML = "Tienes que escribir una contraseña";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputContrasenia.classList.remove("errorBorder");
        inputContrasenia.classList.add("goodBorder");
      }
      let inputPais = form.elements.pais;
      if (inputPais.value === "") {
        inputPais.classList.add("errorBorder");
        errorDiv.innerHTML = "Tienes que elegir un país";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputPais.classList.remove("errorBorder");
        inputPais.classList.add("goodBorder");
      }
      let inputFavorito = form.elements.genero_id_favorito;
      if (inputFavorito.value === "") {
        inputFavorito.classList.add("errorBorder");
        errorDiv.innerHTML = "Debes seleccionar un gusto favorito";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputFavorito.classList.remove("errorBorder");
        inputFavorito.classList.add("goodBorder");
      }
      let inputGeneros = form.elements.genero_id;
      let counter = 0;
      for (let i = 0; i < inputGeneros.length; i++) {
        if (inputGeneros[i].checked) {
          counter++;
        }
      }
      if (counter == 0) {
        errorDiv.innerHTML = "Debes seleccionar minimo uno";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        texAviso.innerHTML = "¡Valido!";
      }

      let inputIdentidad = form.elements.genero;
      if (inputIdentidad.value === "") {
        inputIdentidad.classList.add("errorBorder");
        errorDiv.innerHTML = "Debes seleccionar uno";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputIdentidad.classList.remove("errorBorder");
        inputIdentidad.classList.add("goodBorder");
      }
      let inputDescripcion = form.elements.descripcion;
      if (inputDescripcion.value === "") {
        inputDescripcion.classList.add("errorBorder");
        errorDiv.innerHTML = "Debes completar este campo";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputDescripcion.classList.remove("errorBorder");
        inputDescripcion.classList.add("goodBorder");
      }
      let inputFotoPerfil = form.elements.foto_perfil;
      if (!inputFotoPerfil.files[0]) {
        inputFotoPerfil.classList.add("errorBorder");
        errorDiv.innerHTML = "Tienes que subir una imagen";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputFotoPerfil.classList.remove("errorBorder");
        inputFotoPerfil.classList.add("goodBorder");
      }
      return true
    }
    if (validateForm()) {
        form.submit();
    } else {
        evento.preventDefault();
      }
  });
});
