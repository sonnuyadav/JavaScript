//Simple
let name ='',age = 0;
console.log("================Simple Start")
console.log(name || 'sonu');
console.log(age || 20);
console.log("================Simple End")

//using object
console.log("================Using Object Start");
let emp = { profile:{
          empId:'30',
          name:'Sonu Yadav',
          mobile:"+919818536154",
          age:0

   }
};
//using pipeline
console.log(emp.profile.name || "profile is empty");
console.log(emp.profile.age || 30);
console.log(emp.profile || "profile is empty");

// console.log(emp.profile ?? "profile is empty"); //This will be work in beble

//Using && operator
let newEpm = {
   profile:{
   	name:"Sonu Yadav"
   }
};

console.log(newEpm?. newEpm.profile?. newEpm.profile.name);


console.log(newEpm && newEpm.profile && newEpm.profile.name);

//Optional Chaining Operator #OptionalChainingOperator #javascript #typeScript
let emp = {
   profile:{
   	name:"Sonu Yadav",
   	age:20
   }
};

// console.log(emp?. emp.profile?. emp.profile.name);
// console.log(emp?. emp.profile?. emp.profile.age);
