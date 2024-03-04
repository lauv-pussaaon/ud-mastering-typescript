# Typeof Guards

-   involve simply doing a type check before working with a value.

```ts
const isTeenager = (age: number | string) => {
	if (typeof age === "string) {
		// statement
	}
	if (typeof age === "number") {
		// statement
	}
}
```

# Truthiness Guards

-   involve checking a value for being truthy or falsy before working with it. Helpful in avoiding errors when values might be null or undefined.

```ts
const func = (employee?: Employee) => {
    if (!employee) {
        // statement for null
    } else {
        // statement
    }
};
```

# Equality Narrowing

-   involve comparing types to each other before doing certain operations with values.

```ts
const func = (x: string | boolean, y: string | number) => {
    if (x === y) {
        // statement if equal
    }
};
```

# Discriminated unions

-   A common pattern in Typescript involves creating a literal property that is common across multiple types.

```ts
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}
```

# in Narrowing object

# instanceof Narrowing

# Type predicate
