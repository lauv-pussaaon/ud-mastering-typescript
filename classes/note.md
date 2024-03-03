# A Recap of JS Classes

```js
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}!`;
    }
}

const lauv = new Person("Lauv", 25);
lauv.greet();
```

-   constructors
-   class fields
-   getters and setters
-   private # fields
-   static fields / methods
-   inheritance
-   super()

# TypeScript Classes

```typescript

```

-   properties, methods are public by default
-   can set initial value to each class properties
-   readonly can be set to class properties to be set only once
