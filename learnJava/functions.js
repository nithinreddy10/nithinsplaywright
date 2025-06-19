function printMessage(firstname, lastname) {
    console.log(firstname + lastname)

}

printMessage("nithin", "reddy"); 

function add(num1,num2){
    return num1+num2
}
console.log(add(1,2))

//arrow function
printMessage = () => {
    console.log("this is a arrow function")
}
printMessage()
