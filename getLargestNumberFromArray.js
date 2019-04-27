let array = [1,2,3,4,5,6,7,8,999,10,43,4,5,6,7,5,4,3,2,4,45,5,56,4,5,35,35,345,435,34,534,5,34];
let largest =array[0];
for (var i = 0; i < array.length; i++) {
	if(array[i]>largest){
		largest = array[i]
	}
}
console.log(largest); //output 999