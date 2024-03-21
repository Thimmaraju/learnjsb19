// class A{

//     empname
//     empnum
//     empplace
   
//     m1(){

//        this.empname= "Raju"
//        this.empnum = 418
//        this.empplace = "blr"
    
//     }
    
//     m2(){
    
//         console.log(this.empname, this.empnum, this.empplace)
//     }
 
//  }

//  const obj1 = new A()

// // obj1.m1()


//  obj1.m2()


 //binding the data between the methods is encap

 //Inheritance 


//  class A{


//     m1(){

//         console.log("Method 1")
//     }


//     m2(){

//         console.log("Method 2")
//     }


//     m3(){

//         console.log("Method 3")
//     }

//     m4(){

//         console.log("Method 4")
//     }
//  }


//  class B extends A{


//     m5(){

//         console.log("Method 5")
//     }

//     m6(){

//         console.log("Method 6")
//     }

//     m7(){

//         console.log("Method 7")
//     }
//  }

// const raju = new B()

// raju.m1()

// raju.m6()










 //Prototype

 //Polymorphism 


 class employee {

    constructor (val1, val2, val3){
    this.empname = val1;
    this.empnum = val2;
    this.empdept = val3;
    }
    
    display(){

        console.log(this.empname,this.empnum , this.empdept)
    }

}

employee.prototype.org = "DBS QA"

 employee.prototype.displaydetails= function (){

     console.log(this.empname, this.empnum, this.empdept, this.org)
 }

const obj1 = new employee("Raju", 418, "L&D")

obj1.display()

obj1.displaydetails()

console.log(obj1.org)

const obj2 = new employee("Gowda", 419, "L&D")

obj2.display()

console.log(obj2.org)

obj2.displaydetails()

const obj3 = new employee("Shalini", 417, "marketing")

obj3.displaydetails()


//PolyMorphism 

// 1. Method overriding

// 2. Method overriding



class A{


    m1(){

        console.log("Method 1")
    }


    m2(){

        console.log("Method 2")
    }


    m3(){

        console.log("Method 3")
    }

    m4(){

        console.log("Method 4")
    }

    add(a, b){

        console.log(a)
        console.log(b)
        console.log("Sum of two numbers "+(a+b))
    }
 }


 class B extends A{


    m1(){

        console.log("Method 5")
    }

    m6(){

        console.log("Method 6")
    }

    m7(){

        console.log("Method 7")
    }


    add(a, b, c){

        console.log(a)
        console.log(b)
        console.log(c)
        console.log("Sum of three numbers "+(a+b+c))
    }
 }


 const obj4 = new A()

 obj4.m1()

 obj4.add(6,4,3)

 //Method overridding 

 //Method Overloading

 callback 
 Promises
 async 
 await
 set 
 maps 

