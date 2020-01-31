// var emp1 = {firstName:"Sonu", lastName:"Yadav", mobile:9818536154}
// var emp2 = {firstName:"Neeraj", lastName:"Yadav", mobile:9899566521}

// const invite = (var1, var2)=>{
//     console.log("===",var1);
//     //console.log(var1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ var2);
// }

// invite.call(emp1, 'Hello', 'How are you?');

var employee1 = {firstName: 'John', lastName: 'Rodson'};
var employee2 = {firstName: 'Jimmy', lastName: 'Baily'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName+ ', '+ greeting2);
}
invite.call(employee1, 'Hello', 'How are you?'); // Hello John Rodson, How are you?