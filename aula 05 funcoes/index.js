"use strict";
// void
function withoutReturn() {
    console.log("esta funcao nao tem retorno");
}
withoutReturn();
// callback 
function greeting(name) {
    return `ola ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando funcao");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "leonardo");
preGreeting(greeting, "joao");
// generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "v", "b"]));
function margeobjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = margeobjects({ name: "matheus" }, { age: 30, job: "programer" });
console.log(newObject);
// constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "32"));
// especificar tipo de argumento
function margeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(margeArrays([1, 2, 3], [5, 6]));
console.log(margeArrays([1, 2, 3], ["teste", "testando"]));
