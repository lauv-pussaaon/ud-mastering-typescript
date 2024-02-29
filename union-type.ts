let age: number | string = 21;
age = 23;
age = "Twenty Three";

type Point = {
    x: number;
    y: number;
};

type Loc = {
    lat: number;
    long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };
coordinates;

// TYPE NARROWING using typeof condition
function calculateTax(price: number | string, tax: number) {
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}

const isTeenager = (age: number | string): boolean => {
    if (typeof age === "string") {
        return age.charAt(0) === "1";
    } else {
        return age > 12 && age < 20;
    }
};

// UNION TYPES IN ARRAYS
const stuffDifferent: number | string[] = 3;
const stuffMix: (number | string)[] = [1, 2, 3, "asd"];
const stuffEither: number[] | string[] = ["asd", "asd"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 324, long: 34 });
coords.push({ x: 223, y: 343 });

// LITERAL TYPES

const givenAnswer = (answer: "yes" | "no" | "maybe") => {
    return `The answer is ${answer}`;
};

console.log(givenAnswer("no"));

type DayOfWeek =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";

let today: DayOfWeek = "Friday";
