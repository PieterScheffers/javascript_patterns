/////////////// ES5 ///////////////

var Person = (function() {

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype.hello = function() {
        console.log("Hello i'm " + this.name + ". And I'm " + this.age + " years old.");
    };

    return Person;

})();

var bob = new Person("Bob", 25);
bob.hello();


var OldPerson = (function() {

    function OldPerson(name) {
        Person.call(this, name, 121);
    }

    OldPerson.prototype = Object.create(Person.prototype);
    OldPerson.prototype.constructor = OldPerson;

    return OldPerson;

})();


/////////////// ES6 /////////////// 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log(`Hello i'm ${this.name} And I'm ${this.age} years old.`);
    }
}

const dude = new Person("Dude", 22);
dude.hello();


class OldPerson extends Person {
    constructor(name) {
        super(name, 121);
    }
}

const oldDude = new OldPerson("Old Dude");
