interface IPerson{
    fullName: string,
    age: number
}

interface IPerson{
    field?: string,
}


interface IAdmin extends IPerson{
    nationality: string
}

const objPerson:IPerson={
    fullName:'hasham uddin',
    age:23
}

const objAdmin:IAdmin={
    fullName:'hasham uddin',
    age:23,
    field: 'Business Analyst',
    nationality:'pakistani'
}

console.log(objAdmin)

//Array
let arr1:string[]=['hasham','ali','ahmed']
console.log(arr1)
//Output
// ['hasham','ali','ahmed']

let arr2:any[]=['hasham',23,false]
console.log(arr2)
// Output
// ['hasham',23,false]

//enum

enum country{
    pakistan="Pakistan",
    india="India",
    bangladesh="Bangladesh"
}

console.log(country.pakistan)


//Union
let value1:number | string='hasham'
console.log(value1)
// output
// hasham

//literals
let value2:"hasham"| 23=23
console.log(value2)
// output
// 23


//access modifier

class Employee{
    fullname="Hasham Uddin"
    age=23

    displayEmployeeName(){
        console.log(this.fullname)
    }
    private displayAge(){
        console.log(this.age)
    }
}

const obj1=new Employee()
obj1.displayEmployeeName()
//output 
//Hasham uddin
//obj1.displayAge() 
//error
// Property 'displayAge' is private and only accessible within class 'Employee'

//constructor
class Admin{
    constructor(){
        console.log(`This is a constructor`)
    }
}

const obj1Admin=new Admin();
// Output
// This is a constructor


//read only vs private
class Student{
    readonly stdName:string="hasham"
    private stdAge:number=23
}

const objectStd=new Student();
console.log(objectStd.stdName);
//console.log(objectStd.stdAge); // error


//Inheritance
class Salary{
    getSalary(amount){
        console.log(`Your salary is ${amount}`)
    }
}

class BackendDeveloper extends Salary{
    employeeInfo(){
        console.log({
            fullName:"Hasham Uddin",
            experience:"1 year"
        })
    }
}

const backendDeveloperobj=new BackendDeveloper()
backendDeveloperobj.getSalary(100000)