
let num1= prompt('number1');

let num2= prompt('number2');

let op= prompt('Enter the operator(+,-,*,/)');

let num
switch (op)
{
case '+':
	num = num1 + num2
	break
case '-':
	num = num1 - num2
	break
case '*':
	num = num1 * num2
	break
case '/':
	num = num1 / num2
	break
default:
	num = 'Invalid operator'
}

console.log(num)