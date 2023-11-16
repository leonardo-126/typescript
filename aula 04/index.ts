// type guard

function som(a: string | number, b: string | number){
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    }else if(typeof a === "number" && typeof b === "number"){
        console.log(a + b)
    } else {
        console.log("impossivel resolver este caso")
    }
}

som ("23", "22")
som (23, 22)
som (23, "22")

// checando se o valor existe 

function operations(arr: number[], operation?: string | number){
    if(operation) {
        if(operation === "sum"){
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply"){
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    }else {
        console.log("por favor defina uma operacao")
    }
}
operations([1, 2, 3], "sum")
operations([1, 2, 3], "multiply")

// operador  instanceof

class User {
    name

    constructor(name: string){
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string){
        super(name)
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")
console.log(jhon)
console.log(paul)

function userGreeting(user: object){
    if(user instanceof SuperUser){
        console.log(`òla ${user.name}... deseja ver dados do sistema`)
    } else if (user instanceof User){
        console.log(`òla ${user.name}`)
    }
}

// operador in 

class Dog {
    name
    breed

    constructor(name: string, breed?: string){
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("turca")
const bob = new Dog("Bob", "pastor alemao")

function showDogDetails(dog: Dog){
    if('breed' in dog){
        console.log(`O CACHORRO E DA RACA ${dog.breed}`)
    }else {
        console.log("O cachorro e um SRD")
    }
}

showDogDetails(turca)
showDogDetails(bob)
