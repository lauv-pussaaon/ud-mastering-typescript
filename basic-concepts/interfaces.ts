// INTERFACES - serve almost the exact same purpose as type alias, use to create reusable, modular types that describe the shapes of objects.

// type Person = {
//     name: string;
//     age: number;
// };

interface Person {
    readonly id: number;
    name: string;
    age: number;
    nickName?: string;
    // sayHi: () => string;
    sayHi(): string;
}

const sayHappyBirthday = (person: Person) => {
    return `Hey ${person.name}, congrats on turning ${person.age}!`;
};

sayHappyBirthday({
    id: 23232,
    name: "Lauv",
    age: 202,
    sayHi: () => {
        return "hi";
    },
});

interface Product {
    name: string;
    price: number;
    applyDiscount(discount: number): number;
}

const shoes: Product = {
    name: "Pink Sneaky Shoes",
    price: 200,
    applyDiscount(amount: number) {
        return this.price - amount;
    },
};

// REOPENING INTERFACES - extending interface. won't work in Type alias
interface Dog {
    name: string;
    age: number;
}

interface Dog {
    breed: string;
    bark(): string;
}

const elton: Dog = {
    name: "Elton",
    age: 0.5,
    breed: "Australian Shepherd",
    bark() {
        return "WOOF WOOF!";
    },
};

// INHERITING INTERFACES
interface ServiceDog extends Dog {
    job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
    name: "Chewy",
    age: 4.5,
    breed: "Lab",
    bark() {
        return "Bark!";
    },
    job: "guide dog",
};

// INHERITING MULTIPLE INTERFACES
interface Employee {
    readonly id: number;
    email: string;
}

interface Engineer extends Person, Employee {
    level: string;
    languages: string[];
}

const david: Engineer = {
    name: "david",
    id: 132123,
    email: "david@gmail.com",
    level: "senior",
    languages: ["english"],
    age: 25,
    sayHi: () => {
        return "Hi I'm david";
    },
};

// KEY DIFFERENCES IN TYPEs vs. INTERFACEs
// 1. Interfaces works only with object
// 2. Type can be declare as literal values, union, intersect, or primitype types
// 3. Interfaces can be reopened, inheritted
