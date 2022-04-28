//SOLICITADO POR BOOSTRACK PARA QUE EL FORMULARIO NO SE ENVIE VACIO
(function () {
  'use strict'

  // ESTA VARIANTE PERMITE QUE SE LE APLIQUE LA VALIDACION A TODOS LOS DOCUMENTOS 
  var forms = document.querySelectorAll('.needs-validation')

  // BUCLE QUE EVITA EL ENVIO
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()