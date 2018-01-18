function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " and its size is " + this.size + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", "XL");
var OnePlusOne = new Phone("Akai", 850, "black", "S");
var SamsungGalaxyS6 = new Phone("Samsung", 1500, "blue", "L");

iPhone6S.printInfo();
OnePlusOne.printInfo();
SamsungGalaxyS6.printInfo()

Phone.prototype.printInfo = function() {
	console.log(" I like my smartphone called " + this.brand + ".")
}

iPhone6S.printInfo();
OnePlusOne.printInfo();
SamsungGalaxyS6.printInfo()