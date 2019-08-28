var saludId = document.getElementById('greet');

// function greeting(name){
//     return 'Hellow ' + name;
// }
// this arrow
var greeting = name => 'hellow:'+ name;

saludId.innerHTML = greeting('Ignacio');

var sumId = document.getElementById('sum');
var sumar = (num1, num2) => {//num1+num2;
    var num3 = 10;
    return num1+num2+num3;
}
sumId.innerHTML += sumar(10,20);
