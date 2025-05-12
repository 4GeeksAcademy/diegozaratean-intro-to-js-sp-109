console.log('hola desde main.js')

// let nombre = 'santiago'
// console.log('antes de la funcion '+ nombre)
// console.log('despues de la funcion '+ nombre)

// function saludoAlumno(nombre){
//     console.log('dentro de la funcion '+ nombre)
//     console.log('Hola ' + nombre)
// }

// saludoAlumno('Xavier')
// console.log('flag1 '+ nombre)
// saludoAlumno('Juan')
// console.log('flag2 '+ nombre)
// saludoAlumno('Nancy')
// saludo()
// saludo()

// function transportar(origen,destino){
//     console.log('saliendo de ' + origen)    
//     console.log('transportando')    
//     console.log('llegando a ' + destino)    
// }

// transportar('casa', 'gym')
// transportar('gym', 'ofi')
// transportar('ofi', 'casa')
// // transportar()
// transportar()
// transportar()


// function suma(a,b){
//     // console.log('haciendo calculo')
//     // console.log(a + b)
//     console.log('antes del retrun')
//     return a + b
//     console.log('despues del retrun')
// }

// suma(7,3) /// 10 

// console.log(suma(1,2))

// hacer una funcion admitido que valide la edad de una persona e indique 'puedes entrar' o 'debes esperar'
// function admitido(edad){
//     if( edad >= 18){
//         return 'puedes entrar'
//     }else{
//         return'debes esperar'
//         console.log('me ven')
//     }
// }

// let resultado = admitido(15)

// console.log(resultado)

// function getTax(income){   
//     return income * 0.2
// }

// getTax(10000)

// document.getElementById('total').innerText = getTax(10000)
// resultado.innerText = getTax(10000)

// console.log(resultado)

// function suma(a,b){    
//     return a + b
// }

// console.log(suma(2,2)) // 4
// console.log(suma(5,8)) // 13
// console.log(suma(6,0)) // 6
// console.log(suma(7,1)) // 71

// console.log('Antes del window onload')
// window.onload = function (){
//     console.log('Se ejecuto')
// }
// console.log('despues del window onload')

// funcion declarativa
saludoDeclarativo()
function saludoDeclarativo(){
    console.log('hola declarativo')
}


// funcion de expresión
const saludExpresion = function (){
    console.log('saludo expresion')
}
saludExpresion()


// funcion flecha
const saludoFlecha = ()=>{
    console.log('saludo flecha')
    // this
}
saludoFlecha()


// PSEUDO CODIGO
// desarrollar un generador de excusas de Quien,Accion, Cuando ,Que y Donde
// 1. modificar html desde js
// 2. tomar un array Quien y obtener un elemento aleatorio
// 3. tomar un array Accion y obtener un elemento aleatorio
// 4. tomar un array Cuando y obtener un elemento aleatorio
// 5. tomar un array Que y obtener un elemento aleatorio
// 6. tomar un array Donde y obtener un elemento aleatorio
// 7. juntar todos los elementos aleatorios en un string
