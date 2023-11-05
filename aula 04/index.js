"use strict";
// type guard
function som(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("impossivel resolver este caso");
    }
}
som("23", "22");
som(23, 22);
som(23, "22");
// checando se o valor existe 
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("por favor defina uma operacao");
    }
}
operations([1, 2, 3], "sum");
operations([1, 2, 3], "multiply");
// operador  instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`òla ${user.name}... deseja ver dados do sistema`);
    }
    else if (user instanceof User) {
        console.log(`òla ${user.name}`);
    }
}
