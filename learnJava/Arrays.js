// x = [] //empty array, only use square bracket 

// //to find count
// x1 = ["nithin",1,2,3,4,5]
// console.log(x1.length)

// // index in array always from from "0"
// // 1st element is 0

// console.log(x1[0])

// console.log(typeof(x1[0,1]))

// //sorting


// x2 = [1,2,5,4]
// x3 = x2.sort()
// console.log(x3)


// x4 = [1,2,5,4,3,6]
// x5 = x4.reverse()
// console.log(x5)

// arr1 = "nithin"
// arr2 = arr1.split(" ")
// console.log(arr2)


// //PUSH
// arr3 = ["nithin", "reddy"]

// arr3.push("putta") //adds element at the end of array
// arr4=arr3.unshift("putta") //adds element at the first of array
// arr5=arr3.pop()//removes element at the end of array

// console.log(arr3)
// console.log(arr4)
// console.log(arr5)



// arr6 = ["nithin", "reddy"]
// arr7=arr6.pop()//removes element at the end of array
// console.log(arr6)



//filter condition 

const age = [10,11,20,25,30]

major = age.filter((ages => ages>=11))

console.log(major)

const beer = ["ale","pale","lager","pilsner"]

alc = beer.filter((beer => beer.includes("a")))
alc1 = beer.filter(beers => beers.length >= 3)


console.log(alc)
console.log(alc1)

//map function
//reduce function