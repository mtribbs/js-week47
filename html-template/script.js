//console.log("Hello World!");



//VALUES AND VARIABLES 

"Therese";
//console.log("Therese");

35;
//console.log(35);

// let firstName = "Therese";
// console.log(firstName);

// firstName = "Maria";
// console.log(firstName);



//DATA TYPES

//boolean - true/false

// let youWillLearnJs = true;
// console.log(youWillLearnJs);

// strings, numbers, boolean - most important!

// typeof operator
// shows what type a value holds, data type, - only to check
// console.log(typeof true);
// console.log(typeof youWillLearnJs);
// console.log(typeof 36);
// console.log(typeof "Therese");

// youWillLearnJs = "YES";
// console.log(typeof youWillLearnJs);

// undefined 
// let day;
// console.log(day);
// console.log(typeof day);

// day = "wednesday";
// console.log(typeof day);



// LET, CONST, VAR

// let - used for variebles where the value can change in the future
// let age = 30;
// console.log(age);

// age = 31;
// console.log(age);

// empty variables - use let, cannot use const

// const - used where the value cannot change, use as default!!
// const birthYear = 1985; 
// console.log(birthYear);

// birthYear = 1990;
// console.log(birthYear); - does not work, cannot change value of a value declared as const

// always use a keyword! 



// BASIC OPERATORS

// mathematic operators
// plus, minus, division, multiply, equal


// const myAge = 2021 - 1992;
// console.log(myAge);

// const brothersAge = 2021 - 1989;
// console.log(myAge, brothersAge);

// const now = 2021;
// const myAge = now - 1992;
// const brothersAge = now - 1989;
//console.log(myAge, brothersAge);

//console.log(myAge * 2, myAge / 10);

// concantinate
// const firstName = "Therese";
// const lastName = "Ribbas";
//console.log(firstName + lastName);
//console.log(firstName + " " + lastName);

// assignment operator 
// most straight forward is =

// let x = 10 + 5;
// console.log(x);

// x += 10;
// x = x + 10 reassigning x value so x = 25
// console.log(x);

// x *= 4;
// x (25) = x * 4 = 100
// console.log(x);


// plus operator increases the value by 1
// x++;
// console.log(x);

// minus operator decreases the value by 1
// x--;
// console.log(x);


// Comparison operators
// console.log(brothersAge > myAge);
//greater than
// console.log(brothersAge >= 18);
//greater or equal

// const isFullAge = brothersAge >= 18;
//this variable holds the boolean value
// console.log(isFullAge);

// console.log(now - 1992 > now - 1989);


// OPERATOR PRECEDENCE 

// console.log (now - 1992 > now - 1989);
// console.log(myAge);
// console.log(brothersAge);

// console.log(25 - 10 - 5);
//left-to-right
// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);
//right to left
//subtraction has higher precedence, goes left to right, assignment = has lower precedence and calculated right to left
// sub is 10, 10 is y and y is x

// const averageAge = myAge + brothersAge / 2;
// js will first calculate brothersage/2, then add myage, division has higher precedence
// const averageAge = (myAge + brothersAge) / 2;
// console.log(myAge, brothersAge, averageAge);


// STRINGS AND TEMPLATE LITERALS
// const job = "student";
// const birthYear = 1992;
// const year = 2021;

// const therese = 
// "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!"
// console.log(therese);

// const thereseNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(thereseNew);

// console.log("String with \n\
// multiple \n\
// lines");

// console.log(`String with
// multiple
// lines`);
// the es6 way


// TAKING DECISIONS - IF/ELSE

// first - define problem/task
// then - break it apart into smaller pieces/tasks

// TASK: check if a person is old enough to take their driver's license
// step 1: a variable to store the person's age
// step 2: a value that we store in a variable that will represent the required age for taking a driver's license
// step 3: compare the person's age against the required age to see if it is a valid age for taking a driver's license
// step 4: make a decision based on the evaluation, true or false

// step 1
// const age = 15;

// step 2
// const requiredAge = 18; don't need this

// step 3, simplifying stepp 2
// const isOfAge = age >= 18;

//step 4
// if (isOfAge) {
//     console.log("YAY! You can take a driver's license!");
// } else {
//     console.log("Sorry, come back in a few years!");
// }

//simplifying & adding 
// if (age >= 18) {
//     console.log("YAY! You can take a driver's license!");
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sorry, come back in ${yearsLeft} years.`);
// }
//variables/values inside the if/else{} are only accessible inside {}, not outside {}



// LOGICAL OPERATORS

// const hasDriversLicense = true;

// const hasGoodVision = true;
// A and B variables

// console.log(hasDriversLicense && hasGoodVision);
// && = and operator
// both values need to be true for the operation to return true

// console.log(hasDriversLicense || hasGoodVision);
// || = or operator
// only one needs to be true for the operation to return true

// console.log(!hasDriversLicense);
// "!" = not operator

// const canDrive = hasDriversLicense && hasGoodVision;
// combining them and store the result of the operation in a new variable
//console.log(canDrive);

// if (hasGoodVision && hasDriversLicense) {
//     console.log("You can drive!");
// } else {
//     console.log("Someone else should drive.");
// }

// const isTired = false;

// console.log(hasDriversLicense || hasGoodVision || isTired);
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasGoodVision && hasDriversLicense && !isTired) {
//     console.log("You can drive!");
// } else {
//     console.log("Someone else should drive.");
// }



// SWITCH
// alternative way of writing complicated if/else statements

// const day = "Saturday"

// switch (day) {
//     case "Monday":
//        console.log("Do laundry");
//        console.log("Do assignment");
//        break;
//     case "Tuesday":
//         console.log("Submit assignment");
//         break;
//     case "Wednesday":
//     case "Thursday":
//         console.log("Go to the gym");
//         break;
//     case "Friday":
//         console.log("Clean apartment");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("Enjoy the weekend!");
//         break;
//         default:
//             console.log("Not a valid day");
// }

 //day === "Monday"
 //need to end case with break, to tell JS to stop when a case is applied
 // the case needs to be exactly the same as the value (strict comparison)



// my solution
// const monday = false
// const tuesday = false
// const wednesday = false
// const thursday = false
// const friday = false
// const saturday = true
// const sunday = false

// if (monday) {
//     console.log("Do laundry");
// } else if (tuesday) {
//     console.log("Submit assignment");
// } else if (wednesday || thursday) {
//     console.log("Go to the gym");
// } else if (friday) {
//     console.log("Clean apartment");
// } else if (saturday || sunday) {
//     console.log("Enjoy the weekend!");
// } else {
//     console.log("Not a valid day");
// }

// Correct solution
// if (day === "Monday") {
//     console.log("Do laundry");
// } else if (day === "Tuesday") {
//     console.log("Submit assignment");
// } else if (day === "Wednesday" || day === "Thursday") {
//     console.log("Go to the gym");
// } else if (day === "Friday") {
//     console.log("Clean apartment");
// } else if (day === "Saturday" || day === "Sunday") {
//     console.log("Enjoy the weekend!");
// } else {
//     console.log("Not a valid day");
// }




// CONDITIONAL OPERATOR: TERNARY

const age = 25;

age >= 18 ? console.log("I would like a beer") : console.log("I'll have water");

// condition:
// age >= 18 
// if:
// ? console.log("I would like a beer") 
// else:
// : console.log("I'll have water");

// an expression that we can store in a variable
//age <= 18 ? "beer" : "water";

const drink = age >= 18 ? "beer" : "water";
console.log(drink);

console.log(`I would like to drink ${age >= 18 ? "beer" : "water"}`);