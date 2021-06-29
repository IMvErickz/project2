console.log("Bem vindo")
console.log("Aqui é o Erick nos CODs")
console.log(`erick ${1 + 1}`)
console.log(33)
console.log(1235 + 58)
console.log(true)
console.log(false)
console.log(null === undefined)

console.log({
    name: "Erick",
    idade: 18,
    andar: function() {
        console.log('andar')
    }



})

console.log([
    'Erick Santos',
    18,
    'andar'
])

var clima = "quente"
console.log(clima)

var nome = true
console.log(typeof nome)

const idade = 36

console.log(idade)

{
    let y = 0
    console.log('> existe y?', y)
}

{
    let name = 'Andre'
    console.log(name)

}

{
    let checkListName = name === "Andre"
    console.log(checkListName)
}

//multiplos argumentos em uma função
var duble = "dois"
var triple = 'tres'
var squad = 'quatro'
console.log(duble, triple, squad)



//concatenando valores
var er = 'erick'
var age = 18
var verdade = true
console.log(' o ' + er + ' tem ' + age + ' anos ' + verdade)

//interpolando valores com tamplate literals or tamplate string
console.log(`o ${er} tem ${age} anos ${verdade}`)

//objects
const person = {
    naame: 'joão',
    idadee: 23,
    weight: 55.54,
    isAdmin: true
}

console.log(person.idadee) //com o ponto, pego somente uma propriedade


//arrays

const animals = [
    'monkey',
    'lion',
    {
        pet: 'cat',
        anos: 2
    }
]

console.log(animals.length)
console.log(animals[2].anos)