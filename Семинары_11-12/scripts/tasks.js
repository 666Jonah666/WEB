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
console.log('task 3');
object.getName = function() {
  return this.name;
}
city1.getName = function() {
  return this.name;
}
console.log(object.getName());
console.log("\n");

//task 4
console.log('task 4');
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
