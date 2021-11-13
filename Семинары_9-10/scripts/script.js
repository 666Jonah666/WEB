

let message;


message = "hello world";
let var1 = "hi",
age = 25;
message2 = "sad";

let n = 25;
let n1 = 25.345;

alert(1/0);
alert(-Infinity);
alert("None" / 2);

const bigint = 1231232342847912487234n;
let str = "Привет";
let str1 = 'Привет';
let str2 = `Привет`;

let name = "Даниил";
alert(`hi , ${name}`);

alert(`Рез ${3+2}`);

let b = true;
let b2 = false;

let isGreater = 5<2;
let age = null;

alert(typeof undefined);
alert(typeof 10);
alert(typeof null);
alert(typeof true);
alert(typeof 10n);
alert(typeof alert);

alert(message);


let ageprompt = prompt("Сколько тебе лет?", 0);

let resultConfirm = confirm("some question");
console.log(resultConfirm);


let value = true;
console.log(typeof value);
value = String(value);
console.log(typeof value);

console.log("6" / "2");

let string = "123";
string = Number(string);
console.log(string);

let x = 5;
x += 15;
console.log(x);


let counter = 2;
console.log(counter++);
console.log(counter);
console.log(counter--);
console.log(counter);

let counter = 2;
console.log(++counter);
console.log(counter);
console.log(--counter);
console.log(counter);

let year = prompt("undefined", 2014);

if (year == 2015) {
  alert("True")
} else {
  alert("False")
}

if (year == 2015) {
  alert("True")
} else if (year == 2016) {
  alert("True2")
} else {
  alert("False")
}

if(year > 2012 && year % 2 == 0){
  alert("1")
}
if(year > 2012 || year % 2 == 0){
  alert("2")
}


let access;
let ageterm = prompt("etner your age");

access = ageterm > 18 ? true:false;

let x = 0;

while (x < 5) {
  console.log(`x = ${x}`)
  x++
}

x = 0;
do {
  x++
} while (x < 0);
console.log(`x = ${x}`);

for (var i = 0; i < 15; i++) {
  console.log(`var == ${var}`);
}

for (var i = 0; i < 15; i++) {
  if (i%2 == 0) {
    continue;
  }
  console.log(`var == ${var}`);
}

for (var i = 0; i < 15; i++) {
  if (i%2 == 0) {
    break;
  }
  console.log(`var == ${var}`);
}

let c = "value1";

switch (c) {
  case "value1":
    alert(1);
    break;
  default:
    alert(null)
    break;
}

function showMessage(name) {
    alert(`hi ${name}`);
}
showMessage("asdf");
