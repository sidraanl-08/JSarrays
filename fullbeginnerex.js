///variables

let name = "sidra"
let age = 100
let student = true;
console.log(name, age, student)

///operators
let a = 40
let b = 60
console.log(a+b, a-b, a*b, b/a, a%b)
console.log(a==b, a===b, a<b, a>b, a<=b, a>=b)

//conditionals
let age2 = 13
if(age2>=18) {
    console.log("you are an adult")
}else {
    console.log("you are not an adult")
}

//functions
function greet(name) {
    return ("Halooooo " + name)
}

console.log((greet("sidra")))

function square (a) {
    return(a**2)
}

console.log(square(5))

//loops
for (let i=1; i<=5; i++){
    console.log(i)
}

for (let i=5; i>=1; i--){
    console.log(i)
}

///arrays
let cities = ["amsterdam", "tokyo", "istanbul"]
for (let i =0; i<cities.length; i++){
    console.log(i, cities[i])
}

cities.push("paris")
console.log(cities)

cities.pop("amsterdam")
console.log(cities)

let item = cities[1]
console.log(item)

///arrays + conditionals
let nums = [1,2,3,4,5,6,7,8,9,10]
for (let i =1; i< nums.length; i++) {
    if(nums[i] % 2 ===0) {
        console.log(nums[i] + " this is even")
    } else{
        console.log(nums[i] + " this is odd")
    }
}


///MINI PROJECT///
///finding total sum
let prices = [10, 20, 30, 40, 50];

for (let i=0; i<prices.length; i++){
    console.log(i, prices[i])
}

function total() {
  let sum = 0; 
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i]; 
  }
  return sum; 
}

console.log(total())

///finding average sum
function avg () {
    let sum = total()
    return sum / prices.length
}

console.log(avg())

if (total<=50) {
    console.log("wow! you won a discount")
}else {
    console.log("ooppss no discount this time")
}