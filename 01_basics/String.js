const name = "hitesh";
const repoCount = 50;
console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// String declare
const gameName = new String('hitesh-hc-com');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

//SubString
const newString = gameName.substring(0,4);
console.log(newString);
// Slice means reverse order
const anotherString = gameName.slice(-8,4);
console.log(anotherString);
//trim method to remove space
const newString1 = "     hitesh    ";
console.log(newString1);
console.log(newString1.trim());

const url ="https//hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-'));

//includes
console.log(url.includes('hitesh'));
//split
console.log(gameName.split('-'));