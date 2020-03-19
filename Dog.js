function Dog(name){
	this.name = name;
	this.stomatch = [];
}
Dog.prototype.eat = function(cat){
	this.stomatch.push(cat);
}