// EXPLICIT TYPE
let title: string = "Lauv";
let score: number = 9;
let gameOver: boolean = false;

// TYPE INFERENCE
let tvShow = "Loki";
tvShow = "Alias";
tvShow = false;

// ESCAPE HATCH FOR TYPE DECLARATION
let thing: any = "hello"; // This is not a great idea
thing = 1;
thing = false;
thing();
thing.toUpperCase();

// ARRAY
const movies = ["Avenger", "SpiderMan", "DoctorStrange", "CaptainMarvel"];

//let foundMovie; // default will be Any
let foundMovie: boolean;

for (let movie of movies) {
    if (movie === "SpiderMan") {
        foundMovie = true;
    }
}
