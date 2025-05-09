console.log('hola desde main.js')

let nombre = 'diego';

console.log('1')
console.log('2')
console.log('3')
console.log('4')
console.log('5')

// for(inicializacion;condicion;actualizacion){}
// i = 0  0 <= 5 ======> 0
// i = 1  1 <= 5 ======> 1
// i = 2  2 <= 5 ======> 2
// i = 3  3 <= 5 ======> 3
// i = 4  4 <= 5 ======> 4
// i = 5  5 <= 5 ======> 5
// i = 6  6 <= 5

// i++ ====> i = i + 1
// i-- ====> i = i - 1
// i+=5 ====> i = i + 5


for(let i = 30;i <= 50; i+=5){
    console.log(i)
}


let nombres = ['diego','leonel','anuel']
console.log(nombres)
nombres.push('marcos')
console.log(nombres)

const alumnos = ['Fernando','Xavier','Nahuel']
console.log(alumnos)
alumnos.push('nancy')
console.log(alumnos)

//length          1         2           3
let frutas = ['manzana','platano','naranja']
// position.      0         1         2
console.log(frutas)
console.log(frutas[1])

frutas.push('uvas')
console.log(frutas)

frutas.unshift('mango')
console.log(frutas)

frutas.splice(1,1)
console.log(frutas)

frutas.splice(2,1)
console.log(frutas)

frutas = [ "mango", "manzana", "platano", "naranja", "piña",'mora','sandia','melocoton']
console.log(frutas)
frutas.splice(1,3,'platano')
console.log(frutas)
// frutas.pop()
// console.log(frutas)

// frutas.shift()
// console.log(frutas)

// frutas.splice(1,1, 'pera')
// console.log(frutas)


console.log(frutas[0] + 's')
console.log(frutas[1] + 's')
console.log(frutas[2] + 's')

for(i = 0;i <= frutas.length -1;i++){
    console.log(frutas[i] + 's')
}

console.log(frutas + 's')