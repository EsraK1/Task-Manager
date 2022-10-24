
TypeScript

```tsx
let name: string;
// Union in tsx ⬇ means it can be a number or a string
let age: number | string;
let isStudent: boolean; // isStudent contains a boolean value (true/false)
let hobbies:string[]; //Array of hobbies written as strings
let favouriteNum: num[]; //Array of numbers  
// doesnt have any ⬇ restrictions of type
let favouriteDay: unknown

// Tuple can contain two values of different data types.
// TypeScript Tuple ⬇
let role: [number, string]; //role variable contains an array which takes 1 number and 1 string as arguments
```


Defining an object (2 different ways)
```tsx
//⬇ Alias can be type or interface
type Person = {
    name: string;
    // ⬇ the ? means it's optional
    age?: number;
}

let peerson1: Person = {
    name: 'Esra',
    age: 22, // If age wasn't optional and if I did not state an age it would have thrown an error
}

let lotsOfPeople: Person[];



interface Person {
    name: string;
    age?: number;
}

// extending classes -type and interface ...
interface Guy extends Person {
    profession: string;

}

```

Defining Functions
```tsx
function printName(name: string)
console.log(name)


//return types can be num, string or ⬇
let printNamee: (name: string) => never;
// => never  doesnt return anything
// => void  returns undefined

```
