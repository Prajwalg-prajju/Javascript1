// 1.Find 2nd max and min num in array

var num = [1,2,34,21,55,67,80,98,23,111]
let maximum = num[0]
for(i=0;i<num.length;i++){
    if(num[i]>maximum){
    maximum = num[i]
    }
}
console.log(maximum)//first max

//2nd max
function secMax(arr){
    let max = arr[0]
    let secMax = -Infinity

    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            secMax = max
            max = arr[i]
        }else if(arr[i]>secMax && arr[i] !==max){
            secMax = arr[i]
        }
    }
    return secMax
}
var arr = [1,2,34,21,55,67,80,98,23,111]
console.log(secMax(arr))

//2nd min

function secMin(arr){
    let min = arr[0]
    let secMin = Infinity
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            secMin = min
            min = arr[i]
        }else if (arr[i]<secMin && arr[i] !==min){
            secMin = arr[i]
        }
    }
    return secMin
}
var arr = [1,2,34,21,55,67,80,98,23,111]
console.log(secMin(arr))

//2. Sort an array

function sortArray(arr) {
    let length = arr.length;

    for (let i = 1; i < length; i++) {
        let current = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }

    return arr;
}
 var arr = [5,2,3,6,1,8]
 console.log(sortArray(arr))

 //3.function to remove duplicate ele from an array

 function removeDu(arr){
    let array = []
    for(let i=0;i<arr.length;i++){
        if(array.indexOf(arr[i])===-1){
            array.push(arr[i])
        }
    }
    return array
 }
 var arr = [1,2,2,2,3,4,5,5,6,6,7,7,8,8,8]
 console.log(removeDu(arr))

 //4.function to remove duplicate ele from an string

 function removeDup(str){
    let string = ''
    for(let i = 0; i<str.length;i++){
        if(string.indexOf(str[i])===-1){
            string += str[i]
        }
    }
    return string
 }
 var str = "HelloWorld"
 console.log(removeDup(str))

 //5.convert camelCase to snake_case

 function camel(camelCase){
    let snake = ''
    for(let i=0; i<camelCase.length;i++){
        const char = camelCase[i]
        if(char!==char.toLowerCase()&& i!== 0){
            snake +='_'
            snake += char.toLowerCase()
        }else {
            snake += char.toLowerCase()
        }
    }
    return snake
 }
 const camelString = "camelCaseString"
 const snakeString = camel(camelString)
 console.log(snakeString)

 //6. Convert snake_case to camelCase

 function snake(snakeCase){
    let camel = ''
    let capital = false

    for(let i = 0; i<snakeCase.length; i++){
        const char =snakeCase[i]
        if(char ==='_'){
            capital = true
        }else{
            if(capital){
                camel += char.toUpperCase()
                capital = false
            }else {
                camel += char.toLowerCase()
            }
        }
    }
    return camel
 }
 const snakestr = 'snake_case_string'
 const camelstr = snake(snakestr)
 console.log(camelstr)

 //7.function to flatten the nested array

 function flat(arr){
    let flatten = []
    arr.forEach(item =>{
        if(Array.isArray(item)){
            flatten.push(...flat(item))
        }else{
            flatten.push(item)
        }
    })
    return flatten
 }

 var arr = [1, [2, [3, 4], 5], 6, [7, 8]]
 console.log(flat(arr))

 //8.function to find the 2nd largest number in a nested array

function secLargest(arr){
    let largest = -Infinity
    let secLarge = -Infinity

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            for(let j=0; j<arr.length;j++){
                if(arr[i][j]>largest){
                    secLarge = largest
                    largest = arr[i][j]
                }else if(arr[i][j]>secLarge && arr[i][j] !== largest){
                    secLarge = arr[i][j]
                }
            }
        }else{
            if(arr[i]>largest){
                secLarge = largest
                largest = arr[i]
            }else if(arr[i]>secLarge && arr[i] !== largest){
                secLarge = arr[i]
            }
        }
    }
    return secLarge
}
var arr = [[1, [2, 3],23], [4, 5, 6], [7, 8, 29]]
console.log(secLargest(arr))

//9.pattern
    // 1
    // 2 9
    // 3 8 10
    // 4 7 11 14 
    // 5 6 12 13 15

//10.adding zeros after 3 values in array

function values(arr){
    let newArr = []

    for(let i=0;i<arr.length;i++){
        newArr.push(arr[i])

        if((i+1)%3 ===0 && i!==arr.length -1){
            newArr.push(0)
        }
    }
    return newArr
}

var arr = [1,2,3,4,5,6,7,8,9]
console.log(values(arr))

//11.Reverse a string 

function revStr(str){
    let rev = ''
    for(let i = str.length -1; i>=0; i--){
        rev += str[i]
    }
    return rev
}
let str1 = "hello"
console.log(revStr(str))

//12.function to return a fibonacci series

function fibo(n){
    let fib = []

    if(n ===1){
        fib.push(0)
    }else if(n>=2){
        fib.push(0,1)
        for(let i=2;i<n;i++){
            fib.push(fib[i-1]+fib[i-2])
        }
    }
    return fib
}
var n = 6
console.log(fibo(n).join(", "))

//13.deep clone(copy)

function deep(obj){
    return JSON.parse(JSON.stringify(obj))
}

const obj1 = {
    key1: "value1",
    key2: [1,2,3],
    key:{
        nKey1: "nValue1",
        nkey2: [4,5,6]
    }
}
console.log(deep(obj1))

//14.find how many times an ele is repeated in array and string

function count(arr,el){
    let count = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]===el){
            count++
        }
    }
    return count
}

var arr = [1,2,2,3,3,4,1,5,6,7,8,8,9,1]
var elecount = 3
var out = count(arr,elecount)
console.log(out)

//string

function inString(str,tar){
    let count = 0
    let ind = -1

    while ((ind=str.indexOf(tar,ind+1))!==-1){
        count++
    }
    return count
}
var string = "hello world,hello "
var tar = "hello"
console.log(inString(string,tar))

//15.function to capitalize the first word

function capt(arr){
    if(arr.length === 0){
        return []
    }
    arr[0] = arr[0].charAt(0).toUpperCase()+arr[0].slice(1)

    return arr
}

var arr = ["hello","name","word"]
console.log(capt(arr))
//
function capt(arr){
    return arr.map(word => word.charAt(0).toUpperCase()+word.slice(1))
}
var arr = ["hai","number","water"]
console.log(capt(arr))

//16.calculate the sum array objects

function total(sub){
    let totalMark = 0
    for(let i=0;i<sub.length;i++){
        totalMark +=sub[i].marks
    }
    return totalMark
}
const subjArr = [
    {sub:"Maths",marks:50},
    {sub:"science",marks:40},
    {sub:"eng",marks:70}
]
console.log(total(subjArr))

//20.function to remove duplicate of 2 array

function remove(arr1,arr2){
    const combin = arr1.concat(arr2)
    const us = new Set(combin)
    const ua = Array.from(us)
    return ua
}
var arr1 = [1,2,2,3,3,4,4,5,57,7]
var arr2= [1,1,2,3,4,9,8,7,6]
console.log(remove(arr1,arr2))










