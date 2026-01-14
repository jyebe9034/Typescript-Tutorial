// No need to annatate all the types.
// let sales: number = 123_456_789;
// let course: string = 'Typescript';
// let is_published: boolean = true;
// let level: any;

// let sales = 123_456_789;
// let course = 'Typescript';
// let is_published = true;
// let level;

// function render(document: any) {
//     console.log(document);
// }

// Array
// let numbers: number[] = [1,2,3];
// let numbers = [1,2,3]; // number[]
// let array = []; any []
let numbers: number[] = [];
numbers[0] = 1;
// numbers[1] = '1'; can't put a string into a number array

numbers.forEach(n => n.toString);

// Tuple
// A tuple is a typed array with a pre-defined length and types for each index.
// let tuple: [number , boolean , string];
// tuple = [123 , true , "tuple is good!"];
// tuple = [ture , "tuple is good!" , 123]; Error

type Info = [number , string , boolean];
const info1: Info = [1, '1', true];
const info2: Info = [2, '2', false];
const info3: Info = [3, '3', false];
console.log(info1, info2, info3);

// when use array.push(), it could change the exact meaning of tuple.
// If it's like that, you can use *readonly*
type myTuple = readonly [number , string , boolean];
const myTuple1: myTuple = [1, '1', true];
console.log(myTuple1);

// myTuple1.push(3); Property 'push' doesn't exist on type 'myTuple'.

//Enum
// const small = 1;
// const medium = 2;
// const large = 3;

// enum Size { Small = 1, Medium, Large }
// const enums are inlined at compile time, resulting in better performance.
const enum Size { Small = 1, Medium, Large }  
let mySize: Size = Size.Medium;
console.log(mySize);

// function
function calculateTax(income: number, taxYear = 2026): number {
    if (taxYear < 2026) 
        return income * 1.2;
    return income * 1.3;
    // JS functions return undefined by default unless a value is explicitly returned.
}

calculateTax(10_000);

// Object
type Employee = {
    id: number,
    readonly name: string,
    retire: (date: Date) => void
}
let employee: Employee = { 
    id: 1, 
    name: 'Hannah',
    retire: (date: Date) => {
        console.log(date);
        
    }
};
console.log(employee);

// Union Types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kg');

