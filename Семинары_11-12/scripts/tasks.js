//task 1
console.log('task 1');
let object = new Object();
object.name = 'CityN';
object.population = 1e6;
console.log(object);

//task 2
console.log('task 2');
let city1 = {name: 'CityN', population: 1e6};
console.log(city1);

//task 3
console.log('\ntask 3');
object.getName = function() {
  return this.name;
}
city1.getName = function() {
  return this.name;
}
console.log(object.getName());
console.log(city1.getName());


//task 4
console.log('\ntask 4');
object.exportStr = function() {
  let a = "";
  for (let i in this) {
    if (i == 'name' || i == 'population') {
      a += `${i} = ${this[i]}` + '\n';
    }
  }
  return a;
}
console.log(object.exportStr());

city1.exportStr = function() {
  let a = "";
  for (let i in this) {
    if (i == 'name' || i == 'population') {
      a += `${i} = ${this[i]}` + '\n';
    }
  }
  return a;
}
console.log(city1.exportStr());

//task 5
console.log('task 5');
function getObj(){
  return this;
}
object.getCity = function() {
  return getObj();
}
object.getCity = getObj;
city1.getCity = getObj;
console.log(object.getCity().name);
console.log(city1.getCity().name);

//task 7
console.log('\ntask 7');
let d1 = [45,78,10,3];
d1[7] = 100;
for (let i = 0; i < d1.length; i++){
  console.log(`Element ${i} = ${d1[i]}`);
}

//task 8
console.log('\ntask 8');
let d2 = [45,78,10,3];
let sum2 = 0;
for (let i = 0; i < d2.length; i++){
  sum2 += d2[i];
}
console.log(sum2);

//task 9
console.log('\ntask 9');
let d3 = [45,78,10,3];
d3[7] = 100;
sum3 = 0;
for (let i = 0; i < d3.length; i++){
  if(typeof(d3[i]) != 'undefined'){
    sum3 += d3[i];
  }
}
console.log(sum3);

//task 10
console.log('\ntask 10');
let d4 = [45,78,10,3];
function my(a, b){
    return a - b;
}
console.log(d4.sort(my));

//task 12
console.log('\ntask 12');
class Vector {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }
  plus(vec){
    let object = new Object();
    object.x = this.x + vec.x;
    object.y = this.y + vec.y;
    return object;
  }
  minus(vec){
    let object = new Object();
    object.x = this.x - vec.x;
    object.y = this.y - vec.y;
    return object;
  }
  get length(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

//task 14
console.log('\ntask 14');
function logFive(arr) {
  for (var i = 0; i < 5; i++) {
    if (!arr.next())
      break;
    console.log(arr.current());
  }
}
function ArraySeq(arr) {
  this.pos = -1;
  this.array = arr;
}

ArraySeq.prototype.next = function() {
  if (this.pos >= this.array.length - 1)
    return false;
  this.pos++;
  return true;
};
ArraySeq.prototype.current = function() {
  return this.array[this.pos];
};

logFive(new ArraySeq([1, 2]));

function RangeSeq(from, to) {
  this.pos = from - 1;
  this.to = to;
}
RangeSeq.prototype.next = function() {
  if (this.pos >= this.to)
    return false;
  this.pos++;
  return true;
};
RangeSeq.prototype.current = function() {
  return this.pos;
};

logFive(new RangeSeq(100, 1000));
