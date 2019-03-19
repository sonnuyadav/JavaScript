var myString =" This is a example code";
var find = "a";
for (var i = 0; i < myString.length; i++) {
	if(myString[i] === find)console.log("print string",myString[i], "index is", i);
}

//output
// print string a index is 9
// print string a index is 13
