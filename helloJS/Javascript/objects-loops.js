var student0 = {
   firstName: "Jayne",
   lastName: "Looo",
   age: 8
};

console.log(student0.greeting());

Creates a new empty object
var student1 = new Object();
student1.firstName = "John";
student1.lastName = "Parker";
student1.age = 7;

var student2 = {};
student2.firstName = "Zack";
student2.lastName = "Bobo";
student2.age = 5;

var students = [];

function Student(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        return "Hi, I'm " + this.firstName + " and I'm " + this.age + " years old.";
    };
}

students.push(new Student("Jenny","Laga",5));
students.push(new Student("Timmy","Turner",8));
students.push(new Student("Carl","Jr",4));

var student = students[0];

//for in
for (var key in student) {
    console.log(student[key]);
}

var s1 = new Student("Jenny","Laga",5);
console.log(s1);
console.log(s1.greeting());

students.push(student0);
students.push(student1);
students.push(student2);

for (var index = 0; index < students.length; index++) {
   var student = students[index];
   console.log(student.greeting());
}

console.log(student.firstName);
console.log(student.lastName);
console.log(student["firstName"]);
console.log(student["lastName"]);
