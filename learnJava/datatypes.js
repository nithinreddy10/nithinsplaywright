// Primitive datatypes

// Number // x = 34 or x = 34.6
// string // x = 'nithin' or x = "nithin"
// boolen // x = true or x=false
// undefined // var x = no value given 

// non-primitive datatypes //collection of primitive databases 

// Array
// Object
// Regular expressions 

// arr = [ ]  //empty array

// arr1 = ["Admin", "admin123"]

// Arr2 = ["String", Numbers, true, undefined, null ] // can be collection of all primitve datatypes

// arr3 = [2,23,32,322,23]

arr4 = ["Admin", "admin123"] // to access this we need index & index always starts with 0

console.log(arr4[0]) // this will print "Admin", 
console.log(arr4[1]) // this will print "admin123", 

console.log(typeof(arr4[0])) // to get type of the value declared, in this case its string

arr5 = ["eat", "sleep"]

arr5[1] = "study" //we can redeclare the value, we can only redeclare arrays, redeclaring strings in not possible

console.log(arr5)

//Objects

creds = {
    username : "Admin",
    password : "admin123"
}

console.log(creds.username)