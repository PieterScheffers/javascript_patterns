const generator = function *() {
    const firstValue = yield "firstYield";
    const secondValue = yield firstValue + "secondYield";
    const thirdValue = yield secondValue + "thirdYield";
    return thirdValue + "notyielded";
};

// execute the generator function
const iterator = generator();

const iteration = iterator.next();
console.log("iteration:", iteration); // iteration: { value: 'firstYield', done: false }


const iterationTwo = iterator.next( iteration.value );
console.log("iterationTwo:", iterationTwo); // iterationTwo: { value: 'firstYieldsecondYield', done: false }

const iterationThree = iterator.next( iterationTwo.value );
console.log("iterationThree:", iterationThree); // iterationThree: { value: 'firstYieldsecondYieldthirdYield', done: false }

const iterationFour = iterator.next( iterationThree.value );
console.log("iterationFour:", iterationFour); // iterationFour: { value: 'firstYieldsecondYieldthirdYieldnotyielded', done: true }
