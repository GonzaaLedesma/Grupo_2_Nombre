window.addEventListener("load", function () {
    const button = document.querySelector(".botonFunctionAdminBorrar");
    button.addEventListener("click", function (e) {
      e.preventDefault();
      Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, ¡borrarlo!",
      }).then((result) => {
        if (result.isConfirmed) {
          document.querySelector(".deleteForm").submit();
        }
      });
    });
  });