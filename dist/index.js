"use strict";
// No need to annatate all the types.
// let sales: number = 123_456_789;
// let course: string = 'Typescript';
// let is_published: boolean = true;
// let level: any;
Object.defineProperty(exports, "__esModule", { value: true });
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
let numbers = [];
numbers[0] = 1;
// numbers[1] = '1'; can't put a string into a number array
numbers.forEach(n => n.toString);
const info1 = [1, '1', true];
const info2 = [2, '2', false];
const info3 = [3, '3', false];
console.log(info1, info2, info3);
const myTuple1 = [1, '1', true];
console.log(myTuple1);
// myTuple1.push(3); Property 'push' doesn't exist on type 'myTuple'.
//Enum
// const small = 1;
// const medium = 2;
// const large = 3;
// enum Size { Small = 1, Medium, Large }
// const enums are inlined at compile time, resulting in better performance.
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
// function
function calculateTax(income, taxYear = 2026) {
    if (taxYear < 2026)
        return income * 1.2;
    return income * 1.3;
    // JS functions return undefined by default unless a value is explicitly returned.
}
calculateTax(10_000);
let employee = {
    id: 1,
    name: 'Hannah',
    retire: (date) => {
        console.log(date);
    }
};
console.log(employee);
// Union Types
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
// Nullable Type
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log('Hola!');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
// if (customer !== null && customer !== undefined)
// Optional property access operator
console.log(customer?.birthday);
//# sourceMappingURL=index.js.map