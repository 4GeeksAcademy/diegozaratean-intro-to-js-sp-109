console.log('hola desde main.js5')
console.log('hola')
let persona = {
    nombre: 'juan',
    edad: 30,
    apellido: 'gonzalez',
    "lugar de nacimiento" :'atlantis',
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
    const colores = ['green','red','blue','aqua']    
    let randomColor = colores[Math.floor(Math.random() * colores.length )]
    document.getElementById('title').style.backgroundColor = randomColor
    const students = ['Albert','Pablo','Miguel']
    let randomStudent = students[Math.floor(Math.random() * students.length )] 
    document.getElementById('title').innerHTML = 'hola '+ randomStudent

}


// PSEUDOCODIGO
// Hacer que se asigne de formar aleatoria un color y un nombre de un estudiante al titulo

// PSEUDOCODIGO
// haz un programa que lance dos dados y los muestre en html(en dos parrafos)
// crear una funcion que me lance los dados
function throwDice(){
    let dice1 = Math.floor(  Math.random() * 6  ) + 1
    let dice2 = Math.ceil(Math.random() * 6) 
    document.getElementById('dado1').innerText = dice1
    document.getElementById('dado2').innerText = dice2 
}
 throwDice()
document.getElementById('boton').addEventListener("click",throwDice)















