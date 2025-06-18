car = {
    model : "model 3",
    make : "tesla",
    number: "WCC1892",
    color : "grey"

}
//car is the oject
console.log(car.model)
console.log(car.make)
//another way of writing console
console.log(car['color'])
//updating the property values
car['color'] = "white"
console.log(car['color'])

//undefined object value
console.log(car.ownername)
//adding a new property
car['ownername'] = 'nithin'
console.log(car.ownername)

//deleting the property
delete car['make']
console.log(car.make)

//for in loop
menuitems = {
    menu1 : "food",
    menu2 : "drinks",
    menu3 : "snacks"

}

for( let item in menuitems){
    console.log("loop starts")
    console.log(menuitems[item])
    console.log("loop ends")
}

//data driven testing 
CEO1
CFO1
COO1
{
    
}
