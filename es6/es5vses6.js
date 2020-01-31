//function in es5cd Code by @Sonuyadav
var getNum = function (){
    return 10;
} 
console.log("Print in ES5==",getNum());

const getES6Num = () => 10;
console.log("Print in ES6==",getES6Num);

//Return Array
//ES5
var returnArray = function(){
    return [5,6,4,7,8,9]
}
console.log("Return Array 5", returnArray());
//Es6
const retunrArrayES6 = ()=> [5,6,2,1,3,5,6,7,8];
console.log("Return Array in ES6===", retunrArrayES6());

// function with parameter using ES 6
const sum = (a,b) => a+b;
console.log("sum of two value",sum(5,6));