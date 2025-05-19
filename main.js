console.log('hola desde main.js')

// desarrollar un programa que calcule el impuesto que debo pagar dependiento de mi salario
// si el salario es mayor o igual a 1000 imprimir debes pagar un 10% si no imprimir debes pagar un 5%

// PSEUDOCODIGO
// definir variable salario y asignarle valor
let salario = 5000
// comparar el salario mayor o igual a mil
//si salario igual o mayor a mil  
// let mensaje = ''
// if (salario >= 1000  ){
//     // imprimir debes pagar 10%
//      mensaje ='debes pagar 10%'

// }else{
//     // imprimir debes pagar 5%
//      mensaje ='debes pagar 5%'
// }
// ternary operator
// if(condicion){
    //     que hago true
    // }elser{
        //     que hago si false
        // }
// (condicion) ? que hago true : que hago si false
let mensaje = salario >= 1000   ? 'debes pagar 10%' :'debes pagar 5%'
// document.getElementById("resultado").innerText = mensaje

document.getElementById("resultado").insertAdjacentHTML(
    "afterend",
    `<div><h1> hola este es el impuesto</h1><p> mensaje $ ${mensaje}</p></div>`
)
        
        
        
console.log(mensaje)
console.log('p> mensaje $ ${mensaje}</p>')
console.log(`p> mensaje $ ${mensaje}</p>`)