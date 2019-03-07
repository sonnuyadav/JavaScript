/*
* @Author: Sonu Yadav
* @Date:   2018-12-26 17:35:42
*/
var arr =[3,4,5,6,7]
//using for in loop
 arr.foo = "Hello";
 for(var i in arr){
 	console.log('========>for in loop',i);
 }

//using for of loop
 for(var i of arr){
 	console.log('========>for of loop',i);
 }