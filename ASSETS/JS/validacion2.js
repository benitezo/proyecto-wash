$(document).ready(function(){
  
   

    $("#formulariocar").validate({

        rules:{

            name:{
                required: true,
                number: false,
                minLength: 3,
                maxLength:50

            },
            apellidos:{
                required: true, 
                minLength: 3, 
                maxLength:50

            },

            rut:{
                required: true,
                number: true,
               
            },

            dv:{
                required: true,
                
            },

            direccion:{
                required: true,
            },
            regiones:{
                required: true,
            },
            comunas:{
                required: true,
            },
            tipov:{
                required: true,
            },
            marcav:{
                required: true,
            },
         
            modelov:{
                required: true,
            },
            añov:{
                required: true,
            },
            rvt: {
                required: true,
            },
            encargado: {
                required: true,
            },
            fecha: {
                required: true,
            },
            hora: {
                required: true,
            }
        },

        messages:{

            _name: {
                required: "El Nombre es requerido",
                number: "No se aceptan caracteres numericos en el nombre",
                minLength:"el minimo permitido son 3 caracteres",
                maxLength:"el maximo permitido son 50 caracteres"
            
            },
            apellidos: { 
                required: "El Apellido es requerido",
                minLength: "El minimo permitido son 3 caracteres", 
                maxLength: "El maximo permitido son 50 caracteres"

            },
            rut:{
                required: "El Rut es requerido",
                number: "Ingresar solo numeros",
                max:"El maximo de caracteres permitido son 8 digitos"

            },
            dv: {       
                required: "El Digito Verificador es Requerido"

            },
            direccion:{
                required: "El Campo es Requerido"
            },
            regiones:{
                required: "El Campo es Requerido"
            },
            comunas:{
                required: "El Campo es Requerido"
            },
            tipov:{
                required: "El Campo es Requerido"
            },
            marcav:{
                required: "El Campo es Requerido"
            },
         
            modelov:{
                required: "El Campo es Requerido"
            },
            añov:{
                required: "El Campo es Requerido"
            },
            rvt: {
                required: "El Campo es Requerido"
            },
            encargado: {
                required: "El Campo es Requerido"
            },
            fecha: {
                required: "El Campo es Requerido"
            },
            hora: {
                required: "El Campo es Requerido"
            }




        }


    });




})


