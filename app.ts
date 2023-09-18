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