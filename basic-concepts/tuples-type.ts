// TUPLES - don't exist in JS, they are arrays of fixed lengths and ordered with specific types.

let myTuple: [number, string];

myTuple = [10, "Typescript is fun!"];

const color: [number, number, number] = [242, 232, 213];

type HttpResponse = [number, string];

const goodRes: HttpResponse = [200, "OK"];

const responses: HttpResponse[] = [
    [404, "Not Found"],
    [200, "OK"],
];

// ENUMS - a set of named constants. can given these constants numeric or string values

// Numeric Enums
enum Sample1 {
    no, // 1
    yes, // 2
    maybe, // 3
}

enum Sample2 {
    no = 2, // 2
    yes, // 3
    maybe, // 4
}

enum Sample3 {
    no = 2, // 2
    yes = 10, // 10
    maybe = 24, // 24
}

// String Enums
enum Sample4 {
    no = "No",
    yes = "Yes",
    maybe = "Maybe",
}

// Heterogenous Enums
enum Sample5 {
    no = 0,
    yes,
    maybe = "Maybe",
}

enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
    return status === OrderStatus.DELIVERED;
}

const enum OrderStatusSimplifedJS {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
}

const order = {
    orderNumber: 23243242,
    status: OrderStatusSimplifedJS.PENDING, // object value equalts to 0 in JS
};
