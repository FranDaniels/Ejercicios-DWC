var persona={nombre:'',apellido:'',correo:'',dni:''}//Creamos un objeto
var pwd='admin123'//Creamos la contraseña que vamos a utilizar.

    var correo='usuario'

    document.getElementById('submit').addEventListener("click", () => {
        email = document.getElementById('email').value
        password = document.getElementById('password').value

        if(password==pwd && email==correo){
            confirm("Has iniciado sesión")
            window.location.href='persona.html'
        }else{
            alert('No has podido iniciar sesion')
        }
    })
    
    function mostrarPersona(){
        console.log(persona)
    }

    function guardarUsuarioNuevo(){
        const nombre=document.getElementById('nombre').value
        const apellidos=document.getElementById('apellidos').value
        const email=document.getElementById('correo').value
         dni=document.getElementById('dni').value

        persona.nombre=nombre
        persona.apellido=apellidos
        persona.correo=email
        persona.dni=dni
    }
     
