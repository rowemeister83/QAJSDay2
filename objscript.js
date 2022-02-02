'use strict'

let animal = new Object();
console.log(typeof(animal));

animal["name"] = "Clifford";
animal["type"] = "Dog";
animal["size"] = "Big";

console.log(animal);

animal.colour = "Red";
console.log(animal);

let vehicle = {
    "type" : "bike",
    "seats" : 1,
    "wheels" : 2
}

console.log(typeof(vehicle));
console.log(vehicle);

let garage = [
    vehicle,
    {"type" : "car","seats" : 5,"wheels" : 4}
]

console.log(typeof(garage));
console.log(garage);

let x = [1,2,3,4,5];

for (let i = 0; i < x.length; i ++){
    console.log(x[i]);
}

let y = ["a","b","c","d","e"];

// enhanced FOR loops

for ( let item of y ) {
  console.log(item);
} 

// ARRAY OBJECT METHODS
// will mutate original array

// reverse method
console.log(y.reverse());

// join method
console.log(y.join(" ! "));




// JSON
// JavaScript Object Notation

// the LITERAL notation for objects

let newJSON = {
  "name" : "Mandalorian",
  "age" : 50,
  "key" : "value"
}

// convert JSON to String
let str = JSON.stringify(newJSON);
console.log(newJSON);
console.log(str);

// convert String to JSON
let notAString = JSON.parse(str);
console.log(notAString.name);