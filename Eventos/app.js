//Francisco Álvarez Bellón
const boton=document.getElementById('boton')
const mensaje=document.getElementById('mensajeError')

let comprobarIban = /^(ES76|ES78)$/;
let comprobarCuenta = /^[0-9]{20}$/;
let comprobarNumeroTarjeta = /^[0-9]{16}$/;
let comprobarCvv = /^[0-9]{3}$/;

boton.addEventListener('click', function(){
const iban=document.getElementById('iban').value
const cuenta=document.getElementById('cuenta').value
const numTarjeta=document.getElementById('numeroTarjeta').value
const cvv=document.getElementById('CVV').value

    mensaje.textContent=''
    
    if (iban.length!==4||!comprobarIban.test(iban)) {
        mensaje.textContent='Se necesita que el Iban contenga 4 caracteres y deben ser ES76 o ES78'
    }else{
        if(cuenta.length!==20){
            mensaje.textContent='Se necesita que el numero de cuenta contenga 20 caracteres'
        }else{ 
            if(numTarjeta.length!==16||!comprobarNumeroTarjeta.test(numTarjeta)){
                mensaje.textContent='Número de tarjeta incorrecto'
            }else{
                if (cvv.length!==3||!comprobarCvv.test(cvv)) {
                    mensaje.textContent='El CVV se necesita que contenga 3 numeros'
                }
            }
        }
    }
})

const numTarjeta=document.getElementById('numeroTarjeta')
numTarjeta.addEventListener('change', function(){
    document.getElementById('CVV').value = ""
})

const tarjetas=document.getElementById('tarjetas')
const datos=document.getElementById('datos')
const movimientos=document.getElementById('movimientos')

tarjetas.addEventListener('mouseover', function(){
    tarjetas.style.backgroundColor='lightblue'
})

datos.addEventListener('mouseover', function(){
    datos.style.backgroundColor='lightblue'
})

movimientos.addEventListener('mouseover', function(){
    movimientos.style.backgroundColor='lightblue'
})

tarjetas.addEventListener('mouseout', function() {
    tarjetas.style.backgroundColor = ''
})

datos.addEventListener('mouseout', function() {
    datos.style.backgroundColor = ''
})

movimientos.addEventListener('mouseout', function() {
    movimientos.style.backgroundColor = ''
})
