
// str1 = "Raju"

// str2 = 'Maranna'

// str3 = `Madhu's Place is "bangalore"`

// console.log(str3)

// str4 = str2.concat(str3)

// console.log(str4)

// str5 = str2 + " "+ str3
// console.log(str5)

// output = str1+ " and " +str2
// console.log(output)

// output2 = `${str1} and ${str2}`
// console.log(output2)

// str6 ="This is JS class"

// arr = str6.split("J").join("")

// console.log(arr)


// //s is not equal to S



// str7 = "This Is Simple Sentence"

// str8= str7.toUpperCase()

// console.log(str8)

// str9= str7.toLowerCase()

// console.log(str9)


// console.log(str7.length)

// console.log(str7.charAt(3))

// console.log(str7[3])

// arr = ["raju", "gowda"]

// arr[1]= "Manju"

// console.log(arr)

// //strings are immutable means u can not replace a specific char at some index 

// str10 = "javafcript"

// //str10[4]="s"

// str11 = str10.substring(0,4)

// console.log(str11)


str1 = "₹57,999"

st2 = Number(str1.replace("₹", "").replace(",", ""))

console.log(st2)

str2 = "₹23,999"

st3= Number(str2.replace("₹", "").replace(",", ""))

console.log(st3)

total = st2+st3

console.log(total)

str3 = "    This     is sentence         "

console.log(str3)

str4 = str3.trim()

console.log(str4)

st4 = "Raju gowda manju shalini"

if(st4.includes("monisha")){

    console.log("sub string is available ")
}
else{
    console.log("sub string is not available ")

}


const a = 'hello';
const b = new String('hello');


str5 = "Raju\t"

console.log(10-"raju")