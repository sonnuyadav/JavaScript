//Firstclass function can be assigned to variables
const hello = ()=>{
    return "Hello";
}
//console.log(emp());
//firstclass function can be passed as arguments to other function
const sayHellotoPerson = (person, name) =>{
    return person() +"---"+name;
}
console.log(sayHellotoPerson(hello,"Sahil Kumar"));

//function can be returned from other function
const personMeter = person =>{
  return persondetails =>{
      return person +"===========" + persondetails
  }
}

const sayHitoPerson = personMeter("Hi");
console.log(sayHitoPerson("Sonu"));