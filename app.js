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
