const num1 = 112;
const num2 = 44;


const add = function(a,b) { 
    return `${a} + ${b} = ${a+b}`;
}
const sub = function(a,b) { 
    return `${a} - ${b} = ${a-b}`;
}
const mult = function(a,b) { 
    return `${a} * ${b} = ${a*b}`;
}
const div = function(a,b) { 
    return `${a} / ${b} = ${a/b}`
}



console.log(`The two numbers are ${num1} and ${num2} in this order + - * /`)

console.log(add(num1,num2))   // +
console.log(sub(num1,num2))   // -
console.log(mult(num1,num2))  // *
console.log(div(num1,num2))   // /




