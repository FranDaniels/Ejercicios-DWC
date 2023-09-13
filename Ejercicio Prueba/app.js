var nombre='Francisco'
var appelido='Alvarez'

console.log('Hola ',nombre,appelido)

console.log(typeof(nombre))

var edad=31
console.log(typeof(edad))

var mayorEdad=true
console.log(typeof(mayorEdad))

function saludo(){
    console.log('Hola ', nombre, appelido)
}

saludo()

if (edad>=18){
    mayorEdad=true
    console.log('Soy mayor de edad')
}else{
    mayorEdad=false
    console.log('No soy mayor de edad')
}

var i=0

for (i;i<10;i++){
    console.log('HOLA',i)
}
i=0

while(i<10){
    console.log('BABY HELLOU',i)
    i++
}
i=0
do{
    console.log('Hola',i)
    i++
}while(i<10)

var nombre='Francisco'

switch (nombre) {
    case 'Francisco':
        console.log('Soy Fran')
        break;
    case 'Badr':
        console.log('Soy Badr')
    default:
        break;
}

