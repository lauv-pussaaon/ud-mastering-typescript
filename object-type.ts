// OBJECT TYPE
function printName(person: { first: string; last: string }): void {
    console.log(`${person.first} ${person.last}`);
}

printName({ first: "Lauv", last: "Beebie" });

// no property checking in case using a dedicated object declaration
const singer = { first: "Mick", last: "Jagger", age: 473, isAlive: true };
printName(singer);

// TYPE ALIAS, HELPFUL WITH OBJECT TYPE
type Point = {
    x: number;
    y: number;
};

let coordinate: Point = { x: 34, y: 2 };

function randomCoordinate(): Point {
    return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
    return { x: point.x + 2, y: point.y * 2 };
}

type Song = {
    title: string;
    artist: string;
    numStreams: number;
    credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
    return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
    console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
    title: "Unchained Melody",
    artist: "Righteous Brothers",
    numStreams: 12154215,
    credits: {
        producer: "Phil Spector",
        writer: "Alex North",
    },
};

const earnings = calculatePayout(mySong);
console.log(earnings);
printSong(mySong);

// OPTIONAL PROPERTY
type Point = {
    x: number;
    y: number;
    z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 12844,
    username: "Lauv",
};

user.id = 654545; // readonly

// INTERSECT TYPE ALIAS
type Circle = {
    radius: number;
};

type Colorful = {
    color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
    radius: 4,
    color: "yellow",
};

type Cat = {
    numLives: number;
};

type Dog = {
    breed: string;
};

type CatDog = Cat &
    Dog & {
        age: number;
    };

const christy: CatDog = {
    numLives: 7,
    breed: "Husky",
    age: 9,
};

// Exercise
// Write the Movie type alias to make the following two variables properly typed
// Make sure that "originalTitle" is optional and "title" is readonly
type Movie = {
    readonly title: string;
    originalTitle?: string;
    director: string;
    releaseYear: number;
    boxOffice: {
        budget: number;
        grossUS: number;
        grossWorldwide: number;
    };
};

// Write a function called getProfit that accepts a single Movie object
// then return the movie's worldwide gross minus its budget

/*
function getProfit(movie: Movie): number {
    const { grossWorldwide, budget } = movie.boxOffice;
    return grossWorldwide - budget;
}
*/

function getProfit({ boxOffice: { grossWorldwide, budget } }: Movie): number {
    return grossWorldwide - budget;
}
