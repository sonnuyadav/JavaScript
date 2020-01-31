/**
 * Code Written By Sonu Yadav.
 * Coding in JavaScript without an understanding of closures is like trying to speak English without an understanding of grammar rules
 */
var v = "Hello I am outer";
 var outerFunction =()=>{
     let a = "A is variable of ourterFunction"
    var innerFunction =()=>{
    var b = "B is variable of ourterFunction"
      console.log("========== I am in innerFunction", b);
      console.log("========== I am in innerFunction but called outerFunction", a);
      console.log("========== I am in innerFunction but called outerFunction", v);
      
  }
  //called closures
  innerFunction();
  console.log(b) // not result found
 outerFunction()
                 //OutPut will be   
                //===============I am in outerFunction
                //========== I am in innerFunction