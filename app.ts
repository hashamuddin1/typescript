interface IPerson{
    fullName: string,
    age: number
}

interface IPerson{
    field?: string
}

const objPerson:IPerson={
    fullName:'hasham uddin',
    age:23
}

console.log(objPerson)