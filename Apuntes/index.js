var numeros=[1,2,3,4]

numeros[1]//2
numeros.length//4

for(let i=0;i<numeros.length;i++){
    numeros.push(5)//Añadimos el 5 al final
    console.log(numeros[i])
    numeros.pop()//Borramos el 5
}

var elevar=Math.pow(2,4)//Elevar dos numeros

var aleatorio=Math.random()*50//Realizar un random

console.log(elevar)
console.log(Math.round(aleatorio))

numeros.unshift(2)//Añadir al principio

for(let i=0;i<numeros.length;i++){
    console.log(numeros[i])
}

var encontrar=numeros.find(val=>val==2)

console.log(encontrar)

let sublista=numeros.splice(2,3)

console.log(sublista)

numeros.forEach(function(elemento,index,array){
    console.log(elemento,index)
})





