class banco{
    constructor(nombre,saldo){
        this.nombre=nombre
        this.saldo=saldo
    }
}

var cuenta=new banco('Federico',1000)

function ingresarDinero(dinero) {
    saldo=document.getElementById('saldo').value
    cuenta.saldo+=dinero
    console.log(cuenta)
}

function retirarDinero(dinero) {
    saldo=document.getElementById('saldo').value
    cuenta.saldo-=dinero
    console.log(cuenta)
}
