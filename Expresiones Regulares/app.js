//Francisco Álvarez Bellón
//Ejercicio 1
let numeroPositivo= /^[\d]+$/
console.log(numeroPositivo.test('25'))
console.log(numeroPositivo.test('-25'))
console.log(numeroPositivo.exec('25'))
console.log(numeroPositivo.exec('-25'))

//Ejercicio 2
let numeroNegativo= /^-[\d]+$/
console.log(numeroNegativo.test('25'))
console.log(numeroNegativo.test('-25'))
console.log(numeroNegativo.exec('25'))
console.log(numeroNegativo.exec('-25'))

//Ejercicio 3
let matricula= /^[0-9]{4}[B-DF-GJ-NPR-TV-X-Z]{3}/
console.log(matricula.test('0231AFK'))
console.log(matricula.test('0231GBP'))
console.log(matricula.exec('0231AFK'))
console.log(matricula.exec('0231GBP'))

//Ejercicio 4
let dni= /^[0-9]{8}[A-HJ-NP-TV-Z]{1}/
console.log(dni.test('71371454Q'))
console.log(dni.test('13215125U'))
console.log(dni.exec('71371454Q'))
console.log(dni.exec('13215125U'))

//Ejercicio 5
let binario= /^[01]+$/
console.log(binario.test('241512'))
console.log(binario.test('011001'))
console.log(binario.exec('011001'))
console.log(binario.exec('241512'))

//Ejercicio 6
let octal= /^[0-7]+$/
console.log(octal.test('0101085'))
console.log(octal.test('0731542'))
console.log(octal.exec('0101085'))
console.log(octal.exec('0101001'))

//Ejercicio 7
let hexadecimal= /^[0-9A-F]+$/
console.log(hexadecimal.test('01253AD'))
console.log(hexadecimal.test('01253FL'))
console.log(hexadecimal.exec('125325FG'))
console.log(hexadecimal.exec('82415FD'))

//Ejercicio 8
let discord= /^[A-Za-z0-9]{5,15}[#]{1}[0-9]{6}$/
console.log(discord.test('Franchesc0#523532'))
console.log(discord.test('sp3ctr3#124532_'))
console.log(discord.exec('sp3ctr3#124532'))
console.log(discord.exec('_#523532'))

//Ejercicio 9
function recibirString(string){
var comprobarString= /^[A-Z]{3,20}$/
var final
    if(comprobarString.test(string)){
        final=string
    }else{
        final=string.charAt(0).toUpperCase()+string.substring(1) //Convertirmos el primer caracter a mayuscula con uppercase 
    }
    return console.log(final)
}

recibirString('hola')

//Ejercicio 10
// /^(0[1-9]|[12][0-9]|3[01])(/)(0[1-9]|1[0-2])(/)[1-9]{4}$/
let fecha= /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/
console.log(fecha.test('12/09/2002'))
console.log(fecha.test('124/532/23533'))
console.log(fecha.exec('25/04/2002'))
console.log(fecha.exec('213/12/2134'))