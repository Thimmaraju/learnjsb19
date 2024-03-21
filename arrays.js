

str = "This is javascript class"

reversedstr = str.split("").reverse().join("")

console.log(reversedstr)

arr1 = [] // empty 

arr2 = [1,4,5,6,8]

arr3  = ["raju", 23, "cypress", true, undefined, null]

//index alwayts starts from 0

//first element index 0

console.log(arr2)

console.log(arr3[2])


console.log(arr2.concat(arr3))

arr4 = [9,1,4,7,5,3]

sortedarr = arr4.sort().reverse()

console.log(sortedarr)


console.log(arr3.reverse())

arr5 = ["shalini", "arun", "raju", "shashi", "madhu"]

//console.log(arr5.sort())


//arr5.unshift("Gowda") // will add the element at beginning 

arr5.push("Gowda")  // Will add the elements to end

console.log(arr5)

arr5.shift() // deletes the element at the beginning of the array

arr5.pop()

arr5.pop()

console.log(arr5)

str = "This is javascript class"

arr6 = str.split("")  // converts string to array

console.log(arr6)

console.log(arr6.reverse().join(""))

str2 = "This is javascript class arrays"

// revesedwords = "sihT si tpircsavaj ssalc"

arr7 = str2.split(" ")

arr7[2] = "Cypress"

console.log(arr7)

console.log(arr7.length)

//reversing words 

st4 = ""
for(let i=0; i<=arr7.length-1; i++){

   st3  =  arr7[i].split("").reverse().join("") 

   st4 = st4+ st3 + " "
}


console.log(st4)

//arr8 = ["eat","sleep", "read"]

// const array2 = new Array("eat", "sleep");

// console.log(typeof(array2))


//console.log(arr8.indexOf("read"))

arr8 = [8,9,5,6]
const arr10 = arr8
arr9 = arr8.sort()

console.log(arr9[arr9.length-1])

x= arr9[arr9.length-1]

console.log(arr10.indexOf(x))


arr11 =  ["shalini", "arun", "raju", "shashi", "madhu"]

if(arr11.includes("gowda")){

    console.log("element is present")
}
else{

    console.log("element is not present")
}

arr12 = arr11.splice(1, 3)

console.log(arr12)

let colors = ['red', 'green', 'blue'];
for (const i of colors){
    console.log(i);
}



arr1 = [1,2,3,4,5,6,7,8,9]

arr2 = [a,b,c,d,e,f,h]

output  = [1,a,2,b,3,c,4,d,5,e,6,f,7,h,8,9]

