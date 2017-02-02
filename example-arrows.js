const NAMES = ['Andrew', 'Julie', 'Jen'];

// NAMES.forEach(function(name){
//   console.log('forEach: ', name)
// });

//NAMES.map(name=> console.log('map: ', name));

// let person = {
//   name: 'Andrew',
//   greet: function() {
//     NAMES.forEach(function(name){
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }

//
// let person = {
//   name: 'Andrew',
//   greet: function() {
//     NAMES.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     })
//   }
// }
//
// person.greet();

let addExpression = (a,b) => a+b;

let addStatement = (a,b) => { return a+b };

console.log(addExpression(2,2));
console.log(addStatement(2,2));
