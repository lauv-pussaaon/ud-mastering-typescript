// FUNCTION PARAMS ANNOTATIONS
const doSomething = (person: string, age: number, isFunny: bool) => {};

// RETURN TYPE ANNOTATIONS
function greet(person: string = "stranger"): string {
    return `Hi there, ${person}`;
}

function square(num: number): number {
    return num * num;
}

// ARROW FUNCTION STYLE
const add = (x: number, y: number): number => {
    return x + y;
};

// Typescript will automatically check type of variable in anonymous function
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
    return color.toUpperCase();
});

// VOID
function printTwice(message: string): void {
    console.log(message);
    console.log(message);
}

// NEVER - for function that never should return anything ever or never finish
function gameLoop(): never {
    while (true) {
        console.log("loop running!");
    }
}
