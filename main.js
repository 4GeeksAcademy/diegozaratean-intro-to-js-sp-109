console.log('hola desde main.js')

// Array
// Mario
// Luigi
// Bowser
// Toad
// Peach

let personajesMario = ['Mario','Luigi','Bowser','Toad','Peach', 'star']

console.log(personajesMario)

console.log(personajesMario[0])
console.log(personajesMario[1])
console.log(personajesMario[2])
console.log(personajesMario[3])
console.log(personajesMario[4])

// for(inicializacion;condicion;actualizacion){}
for(let i =0; i < personajesMario.length; i++){
    console.log(personajesMario[i]);
}




















let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// let numbers = [1,2,3,4]
console.log(numbers)

// i = i + 3 ======> i+=3
// i = i + 1 ======> i++


// i = 0 =====> 1
// i = 1 =====> 2
// i = 2 =====> 3
// i = 3 =====> 4
// i = 4 =====> numbers[4] no existe  undefinded


// i = 0 =====> 1
// i = 2 =====> 3
// i = 4 =====> numbers[4] no existe  undefinded


// i = 0 =====> 1
// i = 3 =====> 4
// i = 6 =====> 
for(i = 0;i <= numbers.length; i+=3){
    // console.log(i)
    console.log(numbers[i])
}


// crear un nuevo array con los personajes buenos
let goodGamesNames = []
for(i=0; i < personajesMario.length;i++){
    if(personajesMario[i] != 'Bowser'){
        goodGamesNames.push(personajesMario[i])
    }
}

console.log(personajesMario)
console.log(goodGamesNames)

console.log(personajesMario.filter( (personaje)=> personaje != 'Bowser' ))

console.log(numbers)
console.log(numbers.filter( (numero)=> numero != 7 ))
console.log(numbers.filter( (numero)=> numero > 7 ))
console.log(numbers.filter( (numero)=> numero <= 15 ))
console.log(numbers.filter( (numero)=> numero > 7 && numero <= 15 ))


// impirmir un array de los number multiplciados por 4 
let newNumbers = []
// 1,2,3,4 etc 4,8,12,16
for(i = 0 ; i < numbers.length; i++){
    console.log(numbers[i]*4)
    newNumbers.push(numbers[i]*4)

}

console.log(numbers)
console.log(newNumbers)

let mapNumbers = numbers.map( (number)=> number * 4 )
console.log(mapNumbers)

console.log(personajesMario)
console.log(personajesMario.map( (personaje)=> personaje + 's' ))


personajesMario.forEach( (item)=>{
    console.log(item)
})

console.log('Do while')
let j = 20
do{
    console.log(j)
    j++
}while( j < 8)