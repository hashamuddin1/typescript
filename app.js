var objPerson = {
    fullName: 'hasham uddin',
    age: 23
};
var objAdmin = {
    fullName: 'hasham uddin',
    age: 23,
    field: 'Business Analyst',
    nationality: 'pakistani'
};
console.log(objAdmin);
//Array
var arr1 = ['hasham', 'ali', 'ahmed'];
console.log(arr1);
//Output
// ['hasham','ali','ahmed']
var arr2 = ['hasham', 23, false];
console.log(arr2);
// Output
// ['hasham',23,false]
//enum
var country;
(function (country) {
    country["pakistan"] = "Pakistan";
    country["india"] = "India";
    country["bangladesh"] = "Bangladesh";
})(country || (country = {}));
console.log(country.pakistan);
//Union
var value1 = 'hasham';
console.log(value1);
// output
// hasham
//literals
var value2 = 23;
console.log(value2);
// output
// 23
//access modifier
var Employee = /** @class */ (function () {
    function Employee() {
        this.fullname = "Hasham Uddin";
        this.age = 23;
    }
    Employee.prototype.displayEmployeeName = function () {
        console.log(this.fullname);
    };
    Employee.prototype.displayAge = function () {
        console.log(this.age);
    };
    return Employee;
}());
var obj1 = new Employee();
obj1.displayEmployeeName();
//output 
//Hasham uddin
//obj1.displayAge() 
//error
// Property 'displayAge' is private and only accessible within class 'Employee'
//constructor
var Admin = /** @class */ (function () {
    function Admin() {
        console.log("This is a constructor");
    }
    return Admin;
}());
var obj1Admin = new Admin();
// Output
// This is a constructor
//read only vs private
var Student = /** @class */ (function () {
    function Student() {
        this.stdName = "hasham";
        this.stdAge = 23;
    }
    return Student;
}());
var objectStd = new Student();
console.log(objectStd.stdName);
//console.log(objectStd.stdAge); // error
