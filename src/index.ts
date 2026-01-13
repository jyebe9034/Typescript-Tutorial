// No need to annatate all the types.
// let sales: number = 123_456_789;
// let course: string = 'Typescript';
// let is_published: boolean = true;
// let level: any;

let sales = 123_456_789;
let course = 'Typescript';
let is_published = true;
let level;

function render(document: any) {
    console.log(document);
}

// Array
// let numbers: number[] = [1,2,3];
// let numbers = [1,2,3]; // number[]
let array = []; // any []
let numbers: number[] = [];
numbers[0] = 1;
// numbers[1] = '1'; can't put a string into a number array

numbers.forEach(n => n.toString);

// Tuple
// A tuple is a typed array with a pre-defined length and types for each index.
let tuple: [number , boolean , string];
tuple = [123 , true , "tuple is good!"];
// tuple = [ture , "tuple is good!" , 123]; Error

type info = [number , string , boolean];
const info1 = [1, '1', true];
const info2 = [2, '2', false];
const info3 = [3, '3', false];

// when use array.push(), it could change the exact meaning of tuple.
// If it's like that, you can use *readonly*
type myTuple = readonly [number , string , boolean];
const myTuple1: myTuple = [1, '1', true];
// myTuple1.push(3); Property 'push' doesn't exist on type 'myTuple'.
