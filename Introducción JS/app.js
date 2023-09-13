var u1='Jose Hernandez Morales'
var u2='Maria Ruiz Garcia'
var u3='Sonia Paton Gonzalez'

var nombre1='Jose'
var nombre2='Maria'
var nombre3='Sonia'

var primerApellido1='Hernandez'
var primerApellido2='Ruiz'
var primerApellido3='Paton'

var segundoApellido1='Morales'
var segundoApellido2='Garcia'
var segundoApellido3='Gonzalez'

console.log('Hola ',nombre1, primerApellido1,segundoApellido1,'Bienvenido/a')
console.log('Hola ',nombre2,primerApellido2,segundoApellido2,'Bienvenido/a')
console.log('Hola ',nombre3,primerApellido3,segundoApellido3,'Bienvenido/a')

var edad1=18
var edad2=14
var edad3=20


function comprobarEdad(edad){
    var mayorEdad=false
    if(edad>=18){
        mayorEdad=true
    }

    return mayorEdad
}

console.log(comprobarEdad(edad1))
console.log(comprobarEdad(edad2))
console.log(comprobarEdad(edad3))

function calcularEdad(){
    var anosTotales=0
    anosTotales=edad1+edad2+edad3
    return anosTotales
}

var total=calcularEdad()
console.log(total)

function finalizar(){
    if(comprobarEdad(edad1)){
        console.log(nombre1, primerApellido1,segundoApellido1,' es mayor de edad')
    }else{
        console.log(nombre1, primerApellido1,segundoApellido1,' es menor de edad')
    }
    
    if(comprobarEdad(edad2)){
        console.log(nombre2, primerApellido2,segundoApellido2,' es mayor de edad')
    }else{
        console.log(nombre2, primerApellido2,segundoApellido2,' es menor de edad')
    }

    if(comprobarEdad(edad3)){
        console.log(nombre3, primerApellido3,segundoApellido3,' es mayor de edad')
    }else{
        console.log(nombre3, primerApellido3,segundoApellido3,' es menor de edad')
    }
    
}

console.log(finalizar())
