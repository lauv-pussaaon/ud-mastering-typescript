class Player {
    constructor(
        public first: string = "",
        public last: string = "",
        protected _score: number = 0
    ) {}

    // public readonly firstName: string = "";
    // public readonly lastName: string = "";
    // private score: number = 0;
    // constructor(firstName: string, lastName: string) {
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

    private secretMethod(): void {
        console.log("secret method!");
    }

    get fullName(): string {
        return `${this.first} ${this.last}`;
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if (newScore < 0) {
            throw new Error("Score cannot be negative");
        }
        this._score = newScore;
    }
}

class SuperPlayer extends Player {
    public isAdmin: boolean = true;
    maxScore() {
        this._score = 99999999;
    }
}

const lauv = new Player("Lauv", "Shield", 100);
console.log(lauv.fullName);
lauv.score = 95;

interface Colorful {
    color: string;
}

interface Printable {
    print(): void;
}

class Bike implements Colorful {
    constructor(public color: string) {}
}

class Jacket implements Colorful {
    constructor(public color: string, public brand: string) {}

    print() {
        console.log(`${this.color} ${this.brand}`);
    }
}

abstract class Employee {
    constructor(public first: string, public last: string) {}
    abstract getPay(): number;
}

class FulltimeEmployee extends Employee {
    constructor(
        public first: string,
        public last: string,
        private salary: number
    ) {
        super(first, last);
    }

    getPay(): number {
        return this.salary;
    }
}
