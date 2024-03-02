const activeUsers: [] = []; // variable with empty array type xd always

// array of strings declaration
const namesA: string[] = ["hello", "world"];
// an alternative explicit type
const namesB: Array<string> = ["hello", "world"];

type Point = {
    x: number;
    y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });
coords.push({ x: 21, y: 9 });
coords;

const board: string[][] = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"],
];
