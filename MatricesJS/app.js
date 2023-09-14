var clasificacion=['María','Sonia','Clara','Maria Jose','Eva','Pilar']
var eliminadas=[]
var eliminadosAnteriormente=['Bea','Miriam']
//Ejercicio 1
clasificacion.splice(1,2,'Clara','Sonia')

for(let i=0;i<clasificacion.length;i++){
    console.log(clasificacion[i])
}

//Ejercicio 2
for(let i=0;i<3;i++){
    eliminadas[i]=clasificacion.pop()
    console.log(eliminadas[i])
}
//Ejercicio 3
var eliminadosTotal=eliminadas.concat(eliminadosAnteriormente)

for(let i=0;i<eliminadosTotal.length;i++){
    console.log(eliminadosTotal[i])
}

//Ejercicio 4
var puestos=['1ªpuesto','2ªpuesto','3ªpuesto']
var premios=['150 euros','100 euros','50 euros']

for(let i=0;i<premios.length;i++){
    console.log(clasificacion[i],puestos[i],premios[i])
    
}

//Ejercicio 5
var numerosAleatorios=[]

for(let i=0;i<100;i++){
    var numeroAleatorio=Math.floor(Math.random()*100)
    numerosAleatorios.push(numeroAleatorio)
}

console.log("Números aleatorios:");
numerosAleatorios.forEach((numero, indice) => {
  console.log(`Posición ${indice + 1}: ${numero}`);
})

//Ejercicio 5 a

var numerosUnicos = [new Set(numerosAleatorios)]; //Creamos un array sin numeros repetidos

numerosUnicos.sort();//Los ordenamos de menor a mayor

//Ejercicio 5 b
console.log("Números únicos ordenados de menor a mayor:");
numerosUnicos.forEach((numero, indice) => {
  console.log(`Posición ${indice + 1}: ${numero}`);
})

