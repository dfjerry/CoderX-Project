var Dog = require('./Dog');
var Cat = require('./cat');
var Mouse = require('./mouse');
var dog = new Dog('Tom');
var tom = new Cat();
var cat = new Cat();
var mouse = new Mouse('micki');
dog.sayHi();
dog.eat(tom);
console.log(dog);
cat.eat(mouse);
console.log(cat);
try{
	cat.eat(dog);
}catch{
	console.log('Error while cat eating a dog');
}