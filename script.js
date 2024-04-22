const names = ["Nayeem", "Raihan", "Nayeem", "Rafi"];
let position = names.indexOf("Rafi") ;

console.log(position);

console.log(names[position]);


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first);

function myFunction(value, index, array) {
  return value > 18;
}

const namess = ["Nayeem", "Raihan", "Nayeem", "Rafi"]
console.log(namess.sort());

const namesss = ["Nayeem", "Raihan", "Nayeem", "Rafi"]
console.log(namesss.reverse());

const fruits = [5,200,100,400,2,4,5,9,14,45,1,56,26,489,]

fruits.sort(
    function(a , b) 
    { 
         return a - b
      
    }
);
console.log(fruits);

console.log(fruits[0]);

console.log(fruits[fruits.length-1]);

let result = 2305.66

console.log(Math.round(result));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

function myfun(){
  console.log("10");
}

myfun()

const person = {
  firstName: "Nayeem",
  lastName : "Islam",
  id       : 2306,
  fullName : function(NayeemIslam) {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person);

let x = function jog (){
  console.log( 10 + 20 );
}

let y = () => {

}

let a = ["Html", "Css", "Javascript", "Tailwind", "React"]

a.map((item,index)=>{
  console.log(item);
})