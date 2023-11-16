// void

function withoutReturn():void {
    console.log("esta funcao nao tem retorno")
}

withoutReturn()

// callback 

function greeting(name: string){
    return `ola ${name}`
}

function preGreeting(f: (name: string) => string, userName: string){
    console.log("preparando funcao")
    const greet = f(userName)
    console.log(greet)
}

preGreeting(greeting, "leonardo")
preGreeting(greeting, "joao")

// generic function

function firstElement<T>(arr: T[]): T {
    return arr[0]
}
console.log(firstElement([1,2,3]))
console.log(firstElement(["a","v","b"]))

function margeobjects<T, U>(obj1: T, obj2: U){
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = margeobjects({name: "matheus"}, {age: 30 , job: "programer"})

console.log(newObject)

// constraints

function biggestNumber <T extends number | string> (a: T, b: T) : T {
    let biggest: T

    if(+a > +b){
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("12", "32"))

// especificar tipo de argumento

function margeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(margeArrays([1, 2, 3], [5, 6]))
console.log(margeArrays<number | string>([1, 2, 3], ["teste", "testando"]))
