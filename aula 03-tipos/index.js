"use strict";
// 1 arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// string
let nomes = ["leo", "matheus", "lobo"];
// outra sintaxe 
let nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[0]);
// any 
const arr1 = [1, "teste", true, [], { nome: "matheus" }];
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 parametros tipados 
function soma(a, b) {
    console.log(a + b);
}
soma(5, 3);
// retorno de funcao 
function greeting(name) {
    return `ola ${name}`;
}
console.log(greeting("matheus"));
// funcao anonima 
setTimeout(function () {
    // const sallary: number = 1220
    // console.log(sallary)
}, 1000);
// tipos de objeto 
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("X coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoaObj = { nome: "Leonardo", surname: "paiva" };
// objetos opicionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
}
showNumbers(1, 2, 3);
// validando argumento opicional 
function advancedGreetinh(firstName, lastName) {
    if (lastName !== undefined) {
        return `Ola ${firstName} ${lastName}, tudo bem? `;
    }
    return `Ola ${firstName}`;
}
console.log(advancedGreetinh("Leonardo", "Paiva"));
console.log(advancedGreetinh("leonardo"));
// Union  types
function showBalance(balance) {
    console.log(`o saldo da conta e R$${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, "teste", true];
// avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario nao aprovado";
    }
    return `A funcao do usuario e: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O id e :  ${id}`);
}
console.log(showId(14));
console.log(showId("123"));
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "matheus", age: 12 };
console.log(somePerson);
// type PersonType = {
//     age: 22         o type alias nao pode ser alterado 
// }
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`a direcao e: ${direction}`);
}
showDirection("left");
// nom null assertion 
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
n = 100n;
console.log(n);
console.log(typeof n);
// symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
