interface Movie {
    title: string;
    duration: number;
}

interface TVShow {
    title: string;
    numEpisodes: number;
    episodeDuration: number;
}

// in Narrowing object
function getRuntime(content: Movie | TVShow) {
    if ("numEpisodes" in content) {
        return content.numEpisodes * content.episodeDuration;
    }

    return content.duration;
}

// instanceof Narrowing
function printFullDate(date: string | Date) {
    if (date instanceof Date) {
        return date.toUTCString();
    } else {
        return new Date(date).toUTCString();
    }
}

class User {
    constructor(public username: string) {}
}

class Company {
    constructor(public name: string) {}
}

function printName(entity: User | Company) {
    if (entity instanceof User) {
        console.log(entity.username);
    } else {
        console.log(entity.name);
    }
}

// Type Predicates
abstract class Animal {
    name: string;
}
class Cat extends Animal {
    meow(): void {}
}

class Dog extends Animal {
    bark(): void {}
}
function isDog(pet: Cat | Dog): pet is Dog {
    return (pet as Dog).bark !== undefined;
}

let pet = new Cat();

if (isDog(pet)) {
    pet.bark();
} else {
    pet.meow();
}

// Discriminated unions

interface Rooster {
    name: string;
    weight: number;
    age: number;
    kind: "rooster";
}

interface Cow {
    name: string;
    weight: number;
    age: number;
    kind: "cow";
}

interface Pig {
    name: string;
    weight: number;
    age: number;
    kind: "pig";
}

interface Sheep {
    name: string;
    weight: number;
    age: number;
    kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
    switch (animal.kind) {
        case "pig":
            return "Oink!";
        case "cow":
            return "Muuuw";
        case "rooster":
            return "kuku";
        case "sheep":
            return "fifi";
        default:
            // should never happens here
            const _exhaustiveCheck: never = animal;
            return _exhaustiveCheck;
    }
}

const chubb: Rooster = {
    name: "Chubb",
    weight: 2,
    age: 1.5,
    kind: "rooster",
};

getFarmAnimalSound(chubb);
