var array = [2,3,4,45,5,546,567,86,87,978,789,7897]
var min = Infinity, secMin =Infinity;
for(i=0; i<=array.length; i++){
	if(array[i]<min){
		secMin = min;
		min = array[i]	
	}else if(array[i]<secMin){
		secMin=array[i]
	}
console.log("min",min)
console.log("second smallest number",secMin)
	
}