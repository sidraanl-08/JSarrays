///arrays are denoted with sqaure brackets
let numbers = [36, 47, 26, 78, 95, 10]
console.log(numbers)

//accessing elements of an array
//we use index numbers to access elements
//all arrays start from 0
//to access an element of array, we use that array and indicate index number
console.log(numbers[0],numbers[2], numbers[5])

///updating an array
///we target the index number and give it the new like this:
let names = ["sid", "john", "mia", "yuni", "rio"]
names[2] = "dan"
console.log(names)

///properties of arrays
///find out number of elements in an array
//we use .length property to find total number of elements
/*let fruit = ["apple", "kiwi", "cherry", "mango"]
console.log(fruit.length)*/

///we can also reduce number of elements by using .length-1 property
/*console.log(fruit.length-1)*/

///we can add an element to the end of array with .push prop
let veg = ["cabbage", "carrot", "tomato", "ladyfinger"]
veg.push("potato")
console.log(veg)

///we can add an element to the start of array with .unshift prop
let veg2 = ["coriander" , "parsely", "thyme"]
veg2.unshift("mint")
console.log(veg2)

//we can remove last element from array with .pop property
let emojis = ["smiley", "sad", "angry"]
emojis.pop(2)
console.log(emojis)

//we can remove first element from array with .shift property
let num = [1,2,3,4,5,6,7,8,9]
num.shift(0)
console.log(num)

///lopping through arrays
//printing each element of array
//start i always at 0 coz first array index is 0
///condition: entire length of array
let loop = [10, 20, 30, 40, 50]
for (let i = 0; i< loop.length; i++){
    console.log(loop[i])
}

///array methods
//finding index of an element
//we use indexOf method
let fish = ["salmon", "tuna", "pamflet", "pufferfish", "dolphin", "stingray", "whale"]
let index = fish.indexOf("tuna")
console.log(index)
let index1 = fish.indexOf("dolphin")
console.log(index1)
let index2 = fish.indexOf("whale")
console.log(index2)
let index3 = fish.indexOf("pamflet")
console.log(index3)

///this loop will give index number and name of element
for (let i = 0; i < fish.length; i++){
    console.log(i, fish[i])
}

//multidimensional arrays
///accessing 2d array elements with two indices [outer]>subarray [inner]>element
let array3 = [[1,2], [3,4], [5,6]]
console.log(array3[0][1])
console.log(array3[1][1])
console.log(array3[2][0])

///adding elements to 2d arrays
///first access subarray
//use .push to add element
let fruit2 = [["orange", "apple"],["kiwi", "berry"]]
fruit2[1].push("cherries")
console.log(fruit2)

///removing elements from 2d arrays
///first access subarray
///use .pop to remove desired element
let veg3 = [["tomato", "potato"], ["mint","thyme"]]
veg3[1].pop(1)
console.log(veg3)

///removing whole last subarray
veg3.pop()
console.log(veg3)

///min-project
let fruit3 = ["banana", "orange", "mango", "kiwi", "berry"]
fruit3.push("cherry")
console.log(fruit3)
fruit3.unshift("guava")
console.log(fruit3)
fruit3.shift(0)
console.log(fruit3)
fruit3.pop(5)
console.log(fruit3)

fruit3.length
console.log(fruit3)

for (let i =0; i<fruit3.length; i++) {
    ///dont use dot here
    console.log(fruit3[i])
}