// // //1.What are the primitive data types in JavaScript?
// // 1. numbers==> integers,float
// // 2. strings==> "",'',``
// // 3. boolean==> True , False 
// // 4. undefined
// // 5. null
// // 6. symbol()

// //1. numbers

// let num = 20
// num1 = 10.3
// console.log(typeof(num),typeof(num1))

// //2.strings

// let name = 'rohith'
// data = `After centuries of unprecedented patience`
// console.log(typeof(name))
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.split(''))
// console.log(data.slice(2,9))
// console.log(data.substr(0,10))
// console.log(data.substr(5,10))
// console.log(data.substring(0,10))
// console.log(data.substring(5,10))
// console.log(data.indexOf('of'))
// console.log(data.split('of'))
// console.log(data.split('t'))
// console.log(data.includes('of'))
// console.log(data.toLowerCase().includes('after'))
// console.log(name.repeat(3))
// console.log(data.startsWith('After'))
// console.log(data.endsWith('.'))
// let c = 'M S'
// d = 'Dhoni'
// console.log(`The concatination of ${c} and ${d} is ${c} ${d}`)


// // 3. boolean
// let e=true
// num1=10
// num2=10
// num=(num1==num2)
// console.log(num)

// cd = false
// num3=20
// num4=30
// num1=(num3!=num4)
// console.log(num1)

// // 4. Undefined

// let add
// console.log(add)
// let sum = undefined
// console.log(sum)

// //5. null

// let nam = ''
// console.log(nam)
// let nam1=null
// console.log(nam1)

// // 6.symbol

// let nam2 = Symbol('Abc')
// console.log(nam2)

//2.Explain the difference between null and undefined in JavaScript.
//null==> null is an assigned value it means nothing.
let nam3 = ''
nam4 = null
console.log(nam3,nam4)

//undefined==>Undefined means a variable has been declared but no defined.
let add1
console.log(add1)


//3.How do you check the data type of a variable in JavaScript?
let nu = 20
nu1 = 10.3
console.log(typeof(nu),typeof(nu1))


//4.Explain the concept of truthy and falsy values in JavaScript. Provide examples.

// 1.Truthy values==> All the values are truthy value that is considered as true

// if (true) {
//     console.log('Truethy Value1')

// }

// if (42) {
//     console.log('Truethy Value2')
// }

// if ('Hello') {
//     console.log('Truethy Value3')
// }

// if ({}) {
//     console.log('Truethy Value4')
// }

// //2. Falsy value==> Value that are coerced into false are called falsy

// if (false) {
//     console.log('Falsy value1')
// }

// if (0) {
//     console.log('Falsy value2')
// }

// if ('') {
//     console.log('Falsy value3')
// }

// if (null) {
//     console.log('Falsy value4')
// }

// if (undefined) {
//     console.log('Falsy value5')
// }

// if (NaN) {
//     console.log('Falsy value6')
// }

// let pass = false
//  if (pass){
//  	console.log('Hello')//==>it is false value
//  }
//  else{
//  	console.log('bye')
//  }
//  console.log('all the best')

let t = 2

if (false){
	console.log('a is one')
}
else if(true){
	console.log('a is two')
}
if(false){
	console.log('a is three')
}
console.log('done!!!')


// //5.What is the difference between == and === operators in JavaScript, and how do they relate to data types?

// // == , ===   They are comparision operators used to compare the value like

// let number = 20
// let number1 = '20'
// let out = (number==number1)//==>True
// let out1 = (number===number1)//==>false the typeof is different

// console.log(out)
// console.log(out1)

// // 6. How do you convert a string to a number in JavaScript?
// // parseInt for integers 
// // parseFloat for decimal .


// let number2 = '40'
// let out2 = parseInt(number2)
// let number3 = '50.06'
// let out3 = parseFloat(number3)
// let out4 = Number(number2)

// console.log(out2)
// console.log(out3)
// console.log(out4)


// // 7.Explain the difference between the ++x and x++ increment operators in JavaScript.

// // ++x ==> Prefix increment operator
// // x++ ==> Postfix operator

// let x = 10
// console.log(x++)//assign the value
// console.log(x++)//it increment
// let y = 10
// console.log(++y)// it increments first 
// console.log(++y)


// // 8. How does JavaScript handle NaN (Not a Number) values, and how can you check if a value is NaN?

// function add(num1,num2){
// 	let x = num1
// 	let y = num2
// 	let sum = x*y
// 	return sum
// }
// let output = add('aa',10) // we can not assign the value it is Not a number and string is also not a number it only allows + 
// console.log(output)

// // 9. Explain the concept of type coercion in JavaScript. Provide examples.
// //1. String concatenation

// let nu = 10
// let str = 'The number is ' + nu
// console.log(str)//op is The number is 10

// //2.Arithematric Operations

// let outp = 10 + '5'
// console.log(outp)//op is 105

// //3. comparision operator
// console.log(5=='5')// True number is same and string number is same 
// console.log(5==='5')//False typeof is different

// //10.What is the purpose of the undefined data type, and when might it be explicitly assigned to a variable?

// function num(num1,num2){
// 	let a = num1
// 	let b = num2
// 	let out=num1*num2
// 	return
// }
// console.log(num(20,10)) // it is undefined no return value

// //11.How do you create and use template literals (string interpolation) in JavaScript?

// // ${}

// let z = 'Rohith'
// let v = 'Sharma'
//  console.log(`The sum of ${z} and ${v} is ${z} ${v}`)

//12. Whats Hoisting?
// Variable and function declarations are moved to the top of their scope before code execution

// var x
// console.log(x)
// x=10
// function name(){
// 	console.log('rohith')
// }
// name()


// //13. What is IIFE
// // Immediately Invoked Function Expression

// (function(){
// 	let x =20
// 	let y =30
// 	let sum = x + y
// 	console.log(sum)
// })()


// //14. What is meant by Default parameter passing
// //Initilize the default values 

// function ad(name='Hero'){
// 	console.log(`hello,${name}`)
// }
// ad()
// ad('aaaa')


// // 15.Whats the default return value
// // There is no return statement is undefined

// function name(){
// 	return undefined
// }
// let output = name()
// console.log(output)// undefined

// 16. How to pass unlimited number of parameters to a function
//(...)

// function sum(...numbers) {
//     return numbers
// }

// console.log(sum(1, 2, 3,4))
// console.log(sum(1, 2, 3, 4, 5))
