var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
    }
    return Animal;
}());
var myAnimal = new Animal("dog", "white");
console.log(myAnimal.name, myAnimal.color);
