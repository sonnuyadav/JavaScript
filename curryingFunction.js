//function output within oneline
const sum = (a) => (b) => (c) => (d) => (e) => a+b+c+d+e;
//output within multiline
// function sum(a){
//     return function (b){
//         return function (c){
//             return function (d){ 
//                 return function (e){ return a+b+c+d+e;}
//             }
//         }
//     }
// }
//Question 
const add = sum(5)(4)(1)(6)(4)  //output 20
console.log(add);