console.log("Hello, Welcome to the store");
console.log("We offer coffees for 2$ each and cookie for 1$ each");

let q1 = prompt("How many coffee cups would you like?");
let q2 = prompt("How many cookies would you like?");
let q3 = prompt("How much would you like to leave as a tip?");

console.log(q1 + " " + q2 + " " + q3);

q1 = parseInt(q1);
q2 = parseInt(q2);
q3 = parseInt(q3);

c1 = q1 * 2;
c2 = q2 * 1;

let taxes = (c1 + c2) * 0.1;
let total = c1 + c2 + q3 + taxes;

console.log(
  "You have ordered" + " " + q1 + " " + "coffees for a total of " + c1 + "$"
);
console.log(
  "You have also ordered" +
    " " +
    q1 +
    " " +
    "cookies for a total of" +
    " " +
    c2 +
    "$"
);
console.log(
  "You have left" +
    " " +
    q3 +
    "$ as a tip. The total of your bill is" +
    " " +
    total +
    "$ with taxes"
);
