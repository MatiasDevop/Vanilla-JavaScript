/**Var */
var age = 55;
var age = 60;
//this instruccions works well
console.log(age);
/****Let */
let name = 3;
let name = 5;// 
//en this instruccion yo can't do it cause name has already been declared.
name = 4;
console.log(name);
let i = 50;
for (let i =0 ;i < 10; i++) {
    console.log(i); // this is a diferent envioroment
}
console.log(i);
if (true) {
    let num= 55;
    console.log('inside if'+num);
}
console.log(num);
/***Const */
const num = 44; // just must be declared once
num= 44;// error
console.log(num);

const nums= [55,60,20];
nums =[55,60,10]// error;
nums.push(10);
console.log(nums);