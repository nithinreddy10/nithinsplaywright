var x //declaration
var x = 10 //declaratio and assignment 
console.log(x)

var stuname = "nithin" //string
stuname = "reddy" 
stuname = 'putta'// same variable can be declared again, latest variable will be taken
console.log(stuname)

str="        adobe  "
console.log(str)
console.log(str.trim()) //trims both the sides
console.log(str.trimStart()) //trims the starting space
console.log(str.trimEnd()) //trims the ending space

if (10>9)
{
    var team = 'srh'
    console.log(team) //possible to access variable within the block
}

if (10>9)
{
    var team = 'srh'
}
console.log(team) // possilble to access the variable outside the block

//let 

if (10>9)
{
    let team = 'srh'//let can be accessed withint he block, let value cannot be accessed outside the block
    team = "kkr" // re-assiging the value can be possible
    console.log(team)
}

if (4 > 3) {
let team = "rose"
console.log(flower)       //let is accessible within the sub blocks also
if (5 > 6) //as this statement is false only above output will considered
    {
 console.log(flower)
 }
}

//const

//blocked scope
//re-assigning different value is possible
//redeclaration same same variable is not possible

if (10>9)
{
    const greet = 'hello'
    greet = "hi" //cannot ressign the value, will only take first assigned value "greet = hello", 
                 // greet = hi, will be rejected 

    console.log(greet)
}
