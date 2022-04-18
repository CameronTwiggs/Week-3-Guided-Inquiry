const input = process.argv.splice(2);
const values = input.splice(1).map(x => Number.parseInt(x));
let sum;

const add = function(arr) { 
    return arr.reduce((total, num) => total + num);
}
const sub = function(arr) { 
    return arr.reduce((total, num) => total - num);
}
const mult = function(arr) { 
    return arr.reduce((total, num) => total * num);
}
const div = function(arr) { 
    return arr.reduce((total, num) => total / num);
}

switch (input[0]) {
    case '+': 
        sum = add(values);
        break;
    case '-': 
        sum = sub(values);
        break;    
    case 'x': 
        sum = mult(values);
        break;  
    case '/': 
        sum = div(values);
        break;
}

if (sum) {
    console.log(sum)
}
else {
    console.log(`node math [operator] [values] \n Operators are (+, - , x , /)`)
}
