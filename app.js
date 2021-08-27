// {} is a typescrip notation of a specialized object type, it is identical to writting object there 
// const person: {
//     // key-type pare;
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [name, string] // Tuple - a fixed length and type array - in this case, 2 elements, first one is number, second one is string, can't change the element or push new elements to this array
// } = { 
/*
const person = { // writting so will also get the effect above - better and recommanded
    name: 'Huhu',
    age: 18,
    hobbies: ['sports', 'cooking'], // typescript will assume this is a string array
    role: [2, 'author']
}
*/
// Enum - customed type
// Can also give a specific index if wished, by default the others will follow from 5, unless you specify them explicitly, and it doesn't have to be a number
//  so 5, 6, 7
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role["READ_ONLY"] = "READ ONLY";
    Role[Role["AUTHOR"] = 100] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Huhu',
    age: 18,
    hobbies: ['sports', 'cooking'],
    role: Role.READ_ONLY
};
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    // Now can use some stirng functions since typescript knows that each hobby is a string
    console.log(hobby.toLocaleUpperCase());
}
console.log(person.role); // READ ONLY
function combine(input1, // same type as input2
input2, resultCoversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultCoversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + ' ' + input2.toString();
    }
    return result;
}
var combineAges = combine(15, 18, 'as-number');
console.log(combineAges); // 33
var combineStrings = combine('Huhu', 'Nini', 'as-text');
console.log(combineStrings); // Huhu Nini
var combineAgeString = combine(8, 'Nini', 'as-text');
console.log(combineAgeString); // 8 Nini
// for the function that doesn't return anything, the return type can be void, using hte result of the function(eg console.log(voidFunction())) will get undefined
// A function that returns nothing should be void, not undefined thought, since if you make the return type undefined, it is expcted to have the 'return' at hte end of the function 
/*
    function printResult(num: number): undefined {
        console.log('Result: ' + num)
        return
    }
*/
// Interesting fact: undefined is a typescript type
// let someValue: undefined // This is actually legal
console.log('------------------------------------------------------');
// The Function type
var adding;
adding = combine;
// adding = 6 // Error! Since adding should be a function
// adding = printResult // Error! The parameter lists and return type of printResult doesn't match
console.log(adding(3, 6, 'as-number')); // 9
// function type and callbacks
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    var returnValue = cb(result); // 3
    console.log(returnValue); // 8
}
addAndHandle(1, 2, function (result) {
    console.log(result); // 3
    return 8; // Can still write return here, the void above means that anything you return is not meant to be used by the designer of the function, but you can use it
});
// The unknown type - can store any value in there without getting errors - almost like any, but it is more strict - a better choice than 'any'
var userInput;
var userName;
// No problem
userInput = 5;
userInput = 'Huhi';
// Problem: cannot assign unknown to string. Won't be a broblem if the type os userInput is 'any'
// userName = userInput 
// To fix the problem above:
if (typeof userInput === 'string') {
    userName = userInput;
}
// the never type - another type that a function can return
function generatError(message, code) {
    throw { message: message, errorCode: code };
}
generatError('Daahhh what happened?', 500);
