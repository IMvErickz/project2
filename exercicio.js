let john = {
    idade: 23,
    stars: 70.0,
    isSubscribe: true,
}


//let name = "Erick"
//let age = 18
//let stars = 50.5
//let isSubscribe = true

let student = {

    name: "Erick",
    age: 18,
    stars: 50.5,
    isSubscribe: true,
}

students = [
    student,
    john

]

console.log(students)

//functions
function createPhrases() {
    console.log('Estudar é bom')
    console.log('Eu amo chocolate')
    console.log('I can fly')
}

createPhrases()

//parâmetros (parameters)
const sum = function(number1, number2) {
    total = number1 + number2
    return total

}

let number1 = 34
let number2 = 25

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)

const liqui = function(fruta1, fruta2) {
    let soma = fruta1 + fruta2
    return soma

}

let fruta1 = ' morango '
let fruta2 = ' abacaxi '


console.log(fruta1 + fruta2)

//function scope
let subject = 'create video'

function creatThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(creatThink(subject))

//function hoisting
sayMyName()

function sayMyName() {
    console.log('Santos')
}

//arrow function
const sayName = (name) => {
    console.log(name)
}

sayName('Ericksantos')

//callback function 
function thisName(that) {
    console.log('antes de executar uma função callback')
    that()
    console.log('depois de executar uma função callback')

}

thisName(
    () => {
        console.log('estou em uma callback')
    }
)

/*
função construtora

*expressão new
*criar um novo objeto
*this keyword

*/

function Person(name) {
    this.name = name //propriedade
    this.walk = function() {
        return this.name + ' andar '
    }
}

const erick = new Person("erick")
const joao = new Person("joao")
console.log(erick.walk())
console.log(joao.walk())

let name = new String('davi')

console.log(name)

let data = new Date('2020-12-01')
console.log(data)

/* Prototype
*prototype-based language
*prototype chain
*__proto__

*/

/* 
Type conversation (typecasting) vs Type coersion

*alteração de um tipo de dado para outro tipo
*/

console.log('9' + 5) //Type coersion
console.log(Number('9') + 5) //Type conversation (typecasting)

//Manipulando strings e números
//Transformar string em número e número em strings

let string = '123'
console.log(Number(string))

let number3 = 321
console.log(String(number3))

//Manipulando strings e números
//Contar quantos caracteres tem uma palavra e quantos digitos tem um número

let word = 'paralelepipedo'
console.log(word.length)

let number = 1234
console.log(String(number).length)

//Manipulando strings e números
//Transformar um número quebrado com duas casas decimais e trocar ponto por vírgula

let number4 = 413.4545467657567
console.log(number4.toFixed(2).replace('.', ','))

//Manipulando strings e números
//Transforme letras maiúsculas em minúscula. Faça o contrário disso também

let word1 = 'Programar é muito bacana!'
console.log(word1.toUpperCase())

//manipulando strings e arrays
//separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços,coloque _

let phrase1 = 'eu quero viver o amor'
let myArray = phrase1.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)
console.log(phrase1.includes("quero")) //verifica se tem uma palavra no texto

//Manipulando arrays
//Criar array com construtor

let myArray1 = new Array('a', 'b', 'c')
console.log(myArray1)

//Manipulando arrays
//Contando elementos de um array

console.log(['a', 'b', 'c', 'd'].length)
console.log(['um', 'dois', function() {
    return 'alo' //Também dá para chamar funções dentro de um array 

}][2]())

//Manipulando arrays
//Transformar um cadeia de caracteres em elementos de um arrays

let word10 = 'manipulação'
console.log(Array.from(word10))

//Manipulando arrays
let techs = ["html", "css", "js"]
    //adicionar um item no fim
techs.push("node.js")
    //adicionar no começo
techs.unshift("sql")
    //remover do fim
    //techs.pop()
    //remover do começo
    //techs.shift()

//pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))

//remover um ou mais intens de qualquer posição do array
//techs.splice(1, 1)


//encontrar a posição de um elemento no array
let index = techs.indexOf('css')
console.log(index)


console.log(techs)

/*
Expressões e operadoes

-Expressions
-Operators
  binary
  unary
  ternary

*/

let upalumpa = 1
console.log(++upalumpa)

//new
//left-hand-side expression
//criar um novo objetivo

let upalumpaa = new String('Carlos')
upalumpaa.surName = 'Drummond'
let idadeDele = new Number(34)
console.log(upalumpaa, idadeDele)

//operadores unarios
//typeof
//delete

const persona = {
    name: 'jonathan',
    age: 45
}

delete persona.age
console.log(persona)

console.log(typeof "erick")

//Operadores aritiméticos

//Multiplicação *
console.log(3 * 5)
    //divisão /
console.log(10 / 2)
    //soma +
console.log(54 + 34)
    //subtração -
console.log(10 - 5)


//resto da divisão %
let remainder = 11 % 3
console.log(remainder)
    //incremento ++
let increment = 0
increment++
console.log(increment)
    //decremento --
let decrement = 10
decrement--
console.log(decrement)
    //exponencial **
console.log(4 ** 2)

//Grouping operators ()

let totall = (2 + 3) * 5
console.log(totall)

//operadores de comparação

//Irá comparar valores e retornar um Boolean como resposta a comparação

let one = 1
let two = 2

// == igual a
console.log(two == 1)
console.log(one == "1")

//!= diferente de 
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// === estritamente igual a
console.log(one === "1")
console.log(one === 1)

//!== estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)

// > maior que
console.log(one > two)

//>= maior igual a
console.log(one >= 1)
console.log(two >= 1)

//< menor que 
console.log(one < two)

//<= menor igual a 

console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

//Operadores de atribuição (Assignment)

let x

//Assignment
x = 1

//addition assignemt
x += 2


//subtraction assignment
x -= 1

//multiplication assignment
x *= 2

//division assignment
x /= 2

//remainder
//x %= 2

//exponencial

x **= 2

console.log(x)

//operadores lógicos(logical operators)

// -2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

//let pao = true
//let queijo = true

// AND &&
//console.log(pao && queijo)

// OR ||
//console.log(pao || queijo)
//NOT !
//console.log(!pao)

//Operador condicional ( ternário)

//dependendo da consição, nós recebemos valores diferentes

//condição então 1 se não valor 2
//condition ? value 1 : value2

//Exemplos
//café da manha top
let pao = true
let queijo = true

const niceBreakfast = pao && queijo ? 'café top' : 'café ruim'
console.log(niceBreakfast)

//maior de 18

let age1 = 34
const canDrive = age1 >= 18 ? 'can drive' : "can't drive"
console.log(canDrive)

//Operador para string (string operator)

//comparison (comparação)
console.log('a' == 'a')

//concatenation (concatenação)
//retorna a união de duas strings
let alpha = 'alpha'
alpha += 'bet'
console.log(alpha)


console.log('erick' ? 'verdadeiro' : 'falso') //o primeiro dado não pode ser considerado vazio, exemplo: strings sem valor, numero zero, null undefined, naN


/*
operator precendence 
precendência de operadores

*grouping    ( )
*negação e incremento   ! ++ --
*multiplicação e divisão   * /
*adição e subtração   + -
*relacional   < <= > >=c
*igualdade   == != === !==
*AND   &&
*OR   ||
*condicional   ?:
*assignment (atribuição)   = += -= *=

true = 1
false = 0
*/

//control flow

//se estiver sujo
console.log('lavar o copo')


console.log('Servir o café')

// if e else

let temperature = 34
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log('Febre alta')
} else if (mediumTemperature) {
    console.log('Febre moderada')

} else {
    console.log('Saudável')
}

//switch

let expression = '1'

switch (expression) {
    case 'a':
        console.log('a')
        break;

    case 'b':
        console.log('b')
        break;

    default:
        console.log('default')
}

//throw

//try...catch

function sayMayAgee(agee = '') {
    if (agee === '') {
        throw 'Nome é obrigatório'
    }

    console.log(agee)
}

try {
    sayMayAgee('16')
} catch (e) {
    console.log(e)

}
console.log('Após o try catch')

//Estruturas de repetição

//for
for (let i = 100; i > 0; i--) {
    if (i === 50) {
        break
    }

    //console.log(i)
}

for (let e = 10; e > 0; e--) {
    if (e === 5) {
        continue;
    }

    console.log(e)
}

//while: quando não sabemos o momento da parada do código

let a = 0;
while (a < 10) {
    console.log(a)

    a++;

}

// for...of
let naame = 'Erick'
let names = ['João', 'Paulo', 'Pedro']

for (let char of naame) {
    console.log(char)
}

for (let peg of names) {
    console.log(peg)
}

//for...in: pega as propriedades dentro do objeto
let pessoa = {
    name: 'Lucas',
    age: 17,
    weight: 58.5



}

for (let propriety in pessoa) {
    console.log(propriety)
    console.log(pessoa[propriety])
}