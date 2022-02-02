'use strict'

let DarthVader = {
    allegiance: "Empire",
    Weapon: "Lightsaber",
    sith: true
};

console.log(DarthVader);

console.log("Darth ader's allegiance is to the ${DarthVader.allegiance}");
console.log("Drth Vader's weapon of choice is a ${DarthVader.Weapon}");
console.log("Darth vader is Sith? ${DarthVader.sith}");
console.log(`Darthvader is a jedi? ${DarthVader.sith ? "false" : "true"}`);

///// 2nd one

let MyArray = ["Hullo","everybody"];
 console.log(MyArray.length);
 
 MyArray.push("See Ya");
 console.log(MyArray.length);

 MyArray.shift();
 for(let eachElement of MyArray) {
     console.log(eachElement);
     
 }