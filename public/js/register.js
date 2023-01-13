window.addEventListener("load", function () {
  let form = document.getElementById("myForm");

  form.addEventListener("submit", function (evento) {

    function validateForm() {
      let errorTxtNombre = document.querySelector(".errorTxtNombre");
      let errorTxtApellido = document.querySelector(".errorTxtApellido");
      let errorTxtUsuario = document.querySelector(".errorTxtUsuario");
      let errorTxtEmail = document.querySelector(".errorTxtEmail");
      let errorTxtContrasenia = document.querySelector(".errorTxtContrasenia");
      let errorTxtPais = document.querySelector(".errorTxtPais");
      let errorTxtGeneroFav = document.querySelector(".errorTxtGeneroFav");
      let errorTxtGeneros = document.querySelector(".errorTxtGeneros");
      let errorTxtIdentidadGenero = document.querySelector(".errorTxtIdentidadGenero");
      let errorTxtDescripcion = document.querySelector(".errorTxtDescripcion");
      let errorTxtFotoPerfil = document.querySelector(".errorTxtFotoPerfil");

      let avisoErrorTxt = document.querySelector(".avisoErrorTxt");
      let texAviso = document.querySelector(".texAviso");

      let inputNombre = form.elements.nombre;
      if (inputNombre.value === "") {
        inputNombre.classList.add("errorBorder");
        errorTxtNombre.innerHTML = "Tienes que escribir un nombre";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputNombre.classList.remove("errorBorder");
        inputNombre.classList.add("goodBorder");
        errorTxtNombre.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputApellido = form.elements.apellido;
      if (inputApellido.value === "") {
        inputApellido.classList.add("errorBorder");
        errorTxtApellido.innerHTML = "Tienes que escribir un apellido";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputApellido.classList.remove("errorBorder");
        inputApellido.classList.add("goodBorder");
        errorTxtApellido.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputUsuario = form.elements.nombre_usuario;
      if (inputUsuario.value === "") {
        inputUsuario.classList.add("errorBorder");
        errorTxtUsuario.innerHTML = "Tienes que escribir un nombre de usuario";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputUsuario.classList.remove("errorBorder");
        inputUsuario.classList.add("goodBorder");
        errorTxtUsuario.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputEmail = form.elements.email;
      if (inputEmail.value === "") {
        inputEmail.classList.add("errorBorder");
        errorTxtEmail.innerHTML = "Tienes que escribir un correo electrónico";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputEmail.classList.remove("errorBorder");
        inputEmail.classList.add("goodBorder");
        errorTxtEmail.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputContrasenia = form.elements.contrasenia;
      if (inputContrasenia.value === "") {
        inputContrasenia.classList.add("errorBorder");
        errorTxtContrasenia.innerHTML = "Tienes que escribir una contraseña";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputContrasenia.classList.remove("errorBorder");
        inputContrasenia.classList.add("goodBorder");
        errorTxtContrasenia.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputPais = form.elements.pais;
      if (inputPais.value === "") {
        inputPais.classList.add("errorBorder");
        errorTxtPais.innerHTML = "Tienes que elegir un país";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputPais.classList.remove("errorBorder");
        inputPais.classList.add("goodBorder");
        errorTxtPais.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputFavorito = form.elements.genero_id_favorito;
      if (inputFavorito.value === "") {
        inputFavorito.classList.add("errorBorder");
        errorTxtGeneroFav.innerHTML = "Debes seleccionar un gusto favorito";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputFavorito.classList.remove("errorBorder");
        inputFavorito.classList.add("goodBorder");
        errorTxtGeneroFav.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputGeneros = form.elements.genero_id;
      let counter = 0;
      for (let i = 0; i < inputGeneros.length; i++) {
        if (inputGeneros[i].checked) {
          counter++;
        }
      }
      if (counter == 0) {
        errorTxtGeneros.innerHTML = "Debes seleccionar minimo uno";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        texAviso.innerHTML = "¡Valido!";
        errorTxtGeneros.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }

      let inputIdentidad = form.elements.genero;
      if (inputIdentidad.value === "") {
        inputIdentidad.classList.add("errorBorder");
        errorTxtIdentidadGenero.innerHTML = "Debes seleccionar uno";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputIdentidad.classList.remove("errorBorder");
        inputIdentidad.classList.add("goodBorder");
        errorTxtIdentidadGenero.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputDescripcion = form.elements.descripcion;
      if (inputDescripcion.value === "") {
        inputDescripcion.classList.add("errorBorder");
        errorTxtDescripcion.innerHTML = "Debes completar este campo";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputDescripcion.classList.remove("errorBorder");
        inputDescripcion.classList.add("goodBorder");
        errorTxtDescripcion.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
      }
      let inputFotoPerfil = form.elements.foto_perfil;
      if (!inputFotoPerfil.files[0]) {
        inputFotoPerfil.classList.add("errorBorder");
        errorTxtFotoPerfil.innerHTML = "Tienes que subir una imagen";
        avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        return false;
      } else {
        inputFotoPerfil.classList.remove("errorBorder");
        inputFotoPerfil.classList.add("goodBorder");
        errorTxtFotoPerfil.innerHTML = "";
        avisoErrorTxt.innerHTML = "";
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
