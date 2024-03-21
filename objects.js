

let car = {

    model : 2023,
    manufacturer : "ford"

}

console.log(car.model)

console.log(typeof(car.manufacturer))

const  student = {

    firstname : "Shalini",
    place : "Bangalore",
    enrolled : true
}

console.log(student.firstname)

console.log(student['firstname'])

student["lastname"] = "S"

console.log(student.lastname)


student.place= "chennai"

console.log(student.place)

delete student['place']

console.log(student.place)

const menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3: "Time",
    menu4 : "Leave",
    menu5: "Recruitment"
}

//es6 

//for in

for (let i in menuitems ){

    console.log("loop starts")

    console.log(menuitems[i])

    console.log("loop ends")
}