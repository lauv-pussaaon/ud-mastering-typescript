"use strict";

class Player {
    static description = "Player In Our Game";
    static randomPlayer() {
        return new Player("Lauv", "Shield");
    }

    #score = 0;
    #numLives = 10;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    taunt() {
        console.log("Booya!");
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // getScore() {
    //     return this.#score;
    // }

    get score() {
        return this.#score + 20;
    }

    set score(newScore) {
        if (newScore < 0)
            throw new Error("Score must be more than or equal to 0");
        this.#score = newScore;
    }

    // updateScore(newScore) {
    //     this.#score = newScore;
    //     this.#secret();
    // }

    loseLife() {
        this.#numLives -= 1;
    }

    #secret() {
        console.log("this is secret");
    }
}

class AdminPlayer extends Player {
    constructor(firstName, lastName, powers) {
        super(firstName, lastName);
        this.powers = powers;
    }

    isAdmin = true;
}

const admin = new AdminPlayer("Jasmine", "Lily", ["fly"]);

const player1 = new Player();
player1.score = 2;
console.log(player1.score);
console.log(player1);
