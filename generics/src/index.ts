const nums: Array<number> = [];
const colors: Array<string> = [];

const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl);
inputEl.value = "Hacked";

const btn = document.querySelector<HTMLButtonElement>(".btn");

function numberIdentity(item: number): number {
    return item;
}

function identity<T>(item: T): T {
    return item;
}

identity<number>(7);
identity<string>("hello");
identity<Object>({});

function getRandomElement<T>(list: Array<T>): T {
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex];
}

getRandomElement<string>(["b", "c", "k"]);
// Inferred generic type params
getRandomElement(["c", "e", "s"]);

// Multiple Types
function merge<T, U>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2,
    };
}

const comboObj = merge({ name: "lauv" }, { pets: ["cat", "dog"] });

// Type Constriants
//console.log({...9}); will give {}

function mergeObj<T extends object, U extends object>(obj1: T, obj2: U) {
    return {
        ...obj1,
        ...obj2,
    };
}

interface Lengthy {
    length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
}

// Default Type Parameter
function makeEmptyArray<T = number>(): T[] {
    return [];
}

interface Song {
    title: string;
    artist: string;
}

interface Video {
    title: string;
    creator: string;
    resolution: string;
}

class Playlist<T> {
    public queue: T[] = [];

    add(el: T) {
        this.queue.push(el);
    }
}

const songs = new Playlist<Song>();
const videos = new Playlist<Video>();
