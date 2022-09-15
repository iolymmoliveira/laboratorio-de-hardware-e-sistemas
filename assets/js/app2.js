console.log('Esse é um programa que lê o imc!')
console.log('')

let peso = 60.5
let altura = 1.58
let imc = peso / (altura * altura)

console.log(`Seu imc é ${imc}.`)
console.log('')

if (imc > 30) {
    console.log('Peso Pesadoo!')
} else if (imc >= 25) {
    console.log('Táa gordinhaaa!')
} else if (imc >= 19) {
    console.log('Normalzãoo!')
} else {
    console.log ('Chassi de Grilo, muito baixo!')
}


