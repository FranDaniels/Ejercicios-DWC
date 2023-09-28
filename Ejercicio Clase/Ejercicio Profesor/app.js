class alumno{
    nombre=''
    notas=[]
    constructor(nombre,notas){
        this.nombre=nombre
        this.notas=notas
    }

    notaMedia() {
    var suma = 0;
    var cantidadAsignaturas = notas.length
    for (let i = 0; i < cantidadAsignaturas; i++) {
        suma += notas[i];
    }
    var media=suma/cantidadAsignaturas
    console.log(media)
}
}

class tutor{
    nombre=''
    dni=''
    constructor(nombre,dni){
        this.nombre=nombre
        this.dni=dni
    }
}

class asignatura{
    nombre=''
    nota=''
    constructor(nombre,nota){
        this.nombre=nombre
        this.nota=nota
    }
}

var alumno1=new alumno('Jesus',notas=[1,2,4,8,9,8])
var tutor1=new tutor('Eladio','12421587U')
var asignatura1=new asignatura('Mates',8)

    console.log(alumno1)
    console.log(tutor1)
    console.log(asignatura1)

    alumno1.notaMedia()