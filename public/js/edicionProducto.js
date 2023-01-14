window.addEventListener("load", function () {
    let form = document.getElementById("myFormProduct");
  
    form.addEventListener("submit", function (evento) {
  
      function validateForm() {
        let errorTxtNombreEvento = document.querySelector(".errorTxtNombreEvento");
        let errorTxtFecha = document.querySelector(".errorTxtFecha");
        let errorTxtUbicacion = document.querySelector(".errorTxtUbicacion");
        let errorTxtSede = document.querySelector(".errorTxtSede");
        let errorTxtParticipacion = document.querySelector(".errorTxtParticipacion");
        let errorTxtCapacidad = document.querySelector(".errorTxtCapacidad");
        let errorTxtPrecio = document.querySelector(".errorTxtPrecio");
        let errorTxtHorario = document.querySelector(".errorTxtHorario");
        let errorTxtCategoria = document.querySelector(".errorTxtCategoria");
        // let errorTxtGeneroEvento = document.querySelector(".errorTxtGeneroEvento");
        let errorTxtDescripcionEvento = document.querySelector(".errorTxtDescripcionEvento");
        let errorTxtBiografia = document.querySelector(".errorTxtBiografia");
        let errorTxtFotoEvento = document.querySelector(".errorTxtFotoEvento");
  
        let avisoErrorTxt = document.querySelector(".avisoErrorTxt");
        // let textAviso = document.querySelector(".textAviso");
  
        //////
        let inputNombre_evento = form.elements.nombre_evento;
        if (inputNombre_evento.value === "") {
           inputNombre_evento.classList.remove("goodBorder");
           inputNombre_evento.classList.add("errorBorder");
           errorTxtNombreEvento.innerHTML = "Tienes que escribir un nombre para el evento";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            errorTxtNombreEvento.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        if (inputNombre_evento.value.length < 5) {
          inputNombre_evento.classList.remove("goodBorder");
          inputNombre_evento.classList.add("errorBorder");
          errorTxtNombreEvento.innerHTML = "El nombre debe contar con mas de 5 caracteres";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputNombre_evento.classList.remove("errorBorder");
            inputNombre_evento.classList.add("goodBorder");
            errorTxtNombreEvento.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        //////
        let inputFecha = form.elements.fecha;
        if (inputFecha.value === "") {
            inputFecha.classList.remove("goodBorder");
            inputFecha.classList.add("errorBorder");
            errorTxtFecha.innerHTML = "Tienes que escribir una fecha para el evento";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputFecha.classList.remove("errorBorder");
            inputFecha.classList.add("goodBorder");
            errorTxtFecha.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
       
        //////
        let inputUbicacion = form.elements.ubicacion;
        if (inputUbicacion.value === "") {
            inputUbicacion.classList.remove("goodBorder");
            inputUbicacion.classList.add("errorBorder");
            errorTxtUbicacion.innerHTML = "Tienes que escribir una ubicación para el evento";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputUbicacion.classList.remove("errorBorder");
            inputUbicacion.classList.add("goodBorder");
            errorTxtUbicacion.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        
        //////
        let inputSede = form.elements.sede;
        if (inputSede.value === "") {
            inputSede.classList.remove("goodBorder");
            inputSede.classList.add("errorBorder");
            errorTxtSede.innerHTML = "Tienes que escribir el nombre de la sede para el evento";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputSede.classList.remove("errorBorder");
            inputSede.classList.add("goodBorder");
            errorTxtSede.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        //////
        let inputParticipacion = form.elements.participacion;
        if (inputParticipacion.value === "") {
            inputParticipacion.classList.remove("goodBorder");
            inputParticipacion.classList.add("errorBorder");
          errorTxtParticipacion.innerHTML = "Tienes que escribir otros participantes para el evento";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputParticipacion.classList.remove("errorBorder");
            inputParticipacion.classList.add("goodBorder");
            errorTxtParticipacion.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        
        //////
        let inputCapacidad = form.elements.capacidad_sede;
        if (inputCapacidad.value === "") {
            inputCapacidad.classList.remove("goodBorder");
            inputCapacidad.classList.add("errorBorder");
          errorTxtCapacidad.innerHTML = "Tienes que indicar la capacidad de la sede para el evento";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputCapacidad.classList.remove("errorBorder");
            inputCapacidad.classList.add("goodBorder");
          errorTxtCapacidad.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        //////
        let inputPrecio = form.elements.precio;
        if (inputPrecio.value === "") {
            inputPrecio.classList.remove("goodBorder");
            inputPrecio.classList.add("errorBorder");
          errorTxtPrecio.innerHTML = "Tienes que indicar un precio para el evento";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputPrecio.classList.remove("errorBorder");
            inputPrecio.classList.add("goodBorder");
            errorTxtPrecio.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        //////
        let inputHorario = form.elements.horario;
        if (inputHorario.value === "") {
            inputHorario.classList.remove("goodBorder");
            inputHorario.classList.add("errorBorder");
            errorTxtHorario.innerHTML = "Tienes que indicar un horario para el evento";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            errorTxtHorario.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        if (inputHorario.value.length > 10) {
            inputHorario.classList.remove("goodBorder");
            inputHorario.classList.add("errorBorder");
            errorTxtHorario.innerHTML = "Horario invalido maximo 10 caracteres";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputHorario.classList.remove("errorBorder");
            inputHorario.classList.add("goodBorder");
            errorTxtHorario.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        //////
        let inputCategoria = form.elements.id_categoria;
        if (inputCategoria.value === "") {
            inputCategoria.classList.remove("goodBorder");
            inputCategoria.classList.add("errorBorder");
            errorTxtCategoria.innerHTML = "Debes seleccionar uno";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputCategoria.classList.remove("errorBorder");
            inputCategoria.classList.add("goodBorder");
            errorTxtCategoria.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        //////
        // let inputGeneroEvento = form.elements.evento_id;
        // let counter = 0;
        // for (let i = 0; i < inputGeneroEvento.length; i++) {
        //     if (inputGeneroEvento[i].checked) {
        //     counter++;
        //     }
        // }
        // if (counter == 0) {
        //     errorTxtGeneroEvento.innerHTML = "Tienes que indicar el/los genero/s del evento";
        //     avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
        //     return false;
        // } else {
        //     textAviso.innerHTML = "¡Valido!";
        //     errorTxtGeneroEvento.innerHTML = "";
        //     avisoErrorTxt.innerHTML = "";
        // }
        //////
        let inputDescripcion = form.elements.descripcion;
        if (inputDescripcion.value.length < 20) {
            inputDescripcion.classList.remove("goodBorder");
            inputDescripcion.classList.add("errorBorder");
            errorTxtDescripcionEvento.innerHTML = "La descripción debe contar con al menos de 20 caracteres";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputDescripcion.classList.remove("errorBorder");
            inputDescripcion.classList.add("goodBorder");
            errorTxtDescripcionEvento.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        ////////
        let inputBiografia = form.elements.biografia;
        if (inputBiografia.value.length < 20) {
            inputBiografia.classList.remove("goodBorder");
            inputBiografia.classList.add("errorBorder");
            errorTxtBiografia.innerHTML = "La biografía debe contar con al menos de 20 caracteres";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputBiografia.classList.remove("errorBorder");
            inputBiografia.classList.add("goodBorder");
          errorTxtBiografia.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        ///////
        let inputFotoEvento = form.elements.foto_evento;
        if (!inputFotoEvento.files[0]) {
            inputFotoEvento.classList.remove("goodBorder");
            inputFotoEvento.classList.add("errorBorder");
          errorTxtFotoEvento.innerHTML = "Tienes que subir una imagen";
          avisoErrorTxt.innerHTML = "¡Se encontraron errores!";
          return false;
        } else {
            inputFotoEvento.classList.remove("errorBorder");
            inputFotoEvento.classList.add("goodBorder");
            errorTxtFotoEvento.innerHTML = "";
          avisoErrorTxt.innerHTML = "";
        }
        //////
        return true
      }
      if (validateForm()) {
          form.submit();
      } else {
          evento.preventDefault();
        }
    });
  });
  