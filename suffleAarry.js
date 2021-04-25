//shuffleArray Passing a function that returns (random value – 0.5 ) as comparator to sort function, so as to sort elements on random basis. 
var shuffleArray = arrayVal => arrayVal.sort( ()=> Math.random()-0.5 );
let arr = [1,23,45,6,7,8,9,90,34,56]
console.log(shuffleArray(arr));