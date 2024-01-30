// let a ='			india ENGLISH		'
// b='ENGLISH'

// console.log(a.length)
// console.log(a.toUpperCase())
// console.log(b.toLowerCase())
// console.log(b.substr(3,4))
// console.log(a.substring(3,7))
// console.log(a.split('i'))
// console.log(a.trim())
// console.log(a.trimEnd())
// console.log(a.trimStart())
 
let data= 'After centuries of unprecedented patience'
let a = 'data'
let b = 'science'

console.log(data.slice(10,20))
console.log(data.toLowerCase().includes('after'))
console.log(data.indexOf('of'))
console.log(data.repeat(2))
console.log(data.replace('After','before'))

c =`${a} ${b}`
out = a+' '+b
console.log(`The cancatination of ${a} and ${b} is ${c}`)
console.log(`The cancatination of ${a} and ${b} is ${out}`)
console.log(data.startsWith('A'))
console.log(data.endsWith('.'))
let num= '20'
console.log(num.padStart(5,0))


data1 = `After centuries of unprecedented 85759 patience 8575`

console.log(data1.search(a))
//Assignment operator
let z = 20
x=10

console.log(z+=10)
console.log(z-=10)
console.log(z/=10)
console.log(z*=10)
console.log(z%=10)
console.log(z+x)//Arithematic operator

let f=10
let g=20 
let h=30

console.log(f>g && f>h)
console.log(g>f && g>h)
console.log(h>f && h>g)