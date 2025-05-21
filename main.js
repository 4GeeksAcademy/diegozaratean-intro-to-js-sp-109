console.log('hola desde main.js')

let persona = {
    nombre: 'juan',
    edad: 30,
    apellido: 'gonzalez',
    skills: ['js','python','react'],
    programar: function(){
        console.log('estoy programando')
    }
}

let arrayEjemplo = ['juan',30,'gonzalez']



// objeto Perro/Gato  nombre, raza, color, Ladrar "wow/miau"
let perro = {
    nombre:'ares',
    raza:'pitbull',
    color:'gris',
    ladrando: function(){
        console.log('wow')
    }

}



// PSEUDOCODIGO
// que al dar clickl sobre un boton cambie el texto del titulo a nuevo titulo y el color de fondo a rojo
// DONE: agregar boton al html
// vincular bootn con una accion js
function cambiarTitulo(){
    console.log('cambiarTitulo')
    // DONE: cambiar texto a 'nuevo titulo'
    document.getElementById('title').innerText = 'nuevo titlo' 
    // DONE: cambiar color a rojo
    document.getElementById('title').style.backgroundColor = 'red' 
}
















