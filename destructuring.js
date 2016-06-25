const person = {
    age: 25,
    name: "Guy",
    occupation: "Carpenter"
};

const persons = [
    {
        age: 44,
        name: "Kiki"
    },
    {
        age: 23,
        name: "Paul"
    },
    {
        age: 32,
        name: "Kirby"
    },
    {
        age: 67,
        name: "Max"
    }
];

// basic destructuring
const { age, name } = person;

// use variables
console.log(`My name is ${name} and my age is ${age}.`); // My name is Guy and my age is 25.


// destructuring in a function with default param
// function accepts an object
// if object doesn't have the key 'name', name is set to 'Garry'
function say({ age, name = 'Garry' }) {
    console.log(`My name is ${name} and my age is ${age}.`);
}

say(person);      // My name is Guy and my age is 25.
say({ age: 66 }); // My name is Garry and my age is 66.



// use object spread to copy an array or object

// object
const newPerson = { ...person };
// array
const newArray = [ ...persons ];

// change key when copying
const newPersonChanged = { ...person, age: 33 }; // { age: 33, name: 'Guy', occupation: "Carpenter" }

// change key of object, when the key name is dynamic
const newKey = "newKeyName";
const newPersonChangedDynamicKey = {
    // Take the current state
    ...person,
    // overwrite this post with the new one
    [newKey]: person[newKey] || { age: 22, name: 'default' }
};

// remove an item from an array while copying the array
// third person is removed (index=2)
const newArrayRemoved = [
...persons.slice(0, 2),
...persons.slice(2 + 1)
];

// add an item to an array while copying it
const newArrayAdded = [ ...persons, { age: 11, name: 'Elizabeth' } ];

// change an item while coping
// name of second person is made uppercase
const newArrayItemChanged = [
    ...persons.slice(0, 1),
    {...persons[1],  name: persons[1].name.toUpperCase() },
    ...persons.slice(1 + 1)
];