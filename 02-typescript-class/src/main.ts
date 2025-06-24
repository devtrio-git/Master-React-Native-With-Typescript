console.log("Welcome in Typescript!");

// Objects
// let product: any = {
//   prodName: "IPhone 14",
//   price: 999,
//   inStock: true,
// }

// console.log(product);
// console.log(product.prodName);
// console.log(product.price);
// console.log(product.inStock);

// let std: object = {
//   name: "Yasir",
//   age: 25,
//   isActive: true,
// }

// console.log(std);

// let std: {
//   name: string;
//   age: number;
//   course: string;
//   isActive: boolean;
// } = {
//   name: "Yasir",
//   age: 25,
//   course: "Typescript",
//   isActive: true,
// }

// type Student = {
//   name: string;
//   age: number;
//   course: string;
//   isActive: boolean;
// }

// interface Student  {
//   name: string;
//   age: number;
//   course: string;
//   isActive: boolean;
// }

// let std: Student = {
//   name: "Yasir",
//   age: 25,
//   course: "Typescript",
//   isActive: true,
// }

// console.log(std);
// union types: do ya do se ziada types
// type twoTypes = number | string; 

// let price: twoTypes = 999;
// price = "nine nine nine";


// let mixed: (string | number) [];
// mixed = ["apple", "grapes", "banana", 230, 700, 170, "mango"];

// mixed.forEach((val) => {
//   if (typeof val === "string") {
//     console.log(val.toUpperCase());
//   }else{
//     console.log(val.toFixed(2));
//   }
// })

// intersection types: do ya do se ziada types ko mila kar ek type banana
// type Animal = {
//   name: string,
//   movingSpeed: number
// }

// type Fish = {
//   name: string,
//   swimmingSpeed: number
// }

// type Creature = Animal & Fish;

// let creature: Creature = {
//   name: "Nemo",
//   movingSpeed: 10,
//   swimmingSpeed: 20
// }

// console.log(creature);

// interface Teacher {
//   teacher_id: number;
//   teacher_name: string;
// }

// interface Student {
//   student_id: number;
//   student_name: string;
// }

// type intersectedTypes = Teacher & Student;

// let std1: intersectedTypes = {
//   student_id: 321,
//   student_name: "Yasir",
//   teacher_id: 555,
//   teacher_name: "Sir Owais Ahmed"
// }

// console.log(std1["teacher_name"]);
// console.log(`${std1.student_name} is taught by ${std1.teacher_name}`);

// enum Color {Red=89 , Green, Blue}

// var c: Color = Color.Green;
// // console.log(c); // 1
// console.log(Color[90]); // Red

// enum Cars  {BMW = 100, Audi = 'Fav', Mercedes = 300, Tesla = 400};
// console.log(Cars.Audi); // 100

// enum Direction {
//   North = 20,
//   South = 30,
//   East = 40,
//   West = 50
// }

// enum Status {
//   Success = "Success",
//   Error = "Error",
//   Pending = "Pending"
// }

//OOP: methodology to write code in a more organized way
// 4 Pillars of OOP
// 1. Encapsulation: bundling data and methods that operate on that data within one unit (class).
// 2. Abstraction: hiding the complex implementation details and showing only the necessary features.
// 3. Inheritance: creating a new class that is based on an existing class
// 4. Polymorphism: the ability to present the same interface for different data types

// class Car {
//   //properties
//   brand: string;
//   model: string;

//   //contructor
//   constructor(brand: string, model: string) {
//     this.brand = brand;
//     this.model = model;
//   }

//   //methods
//   drive() {
//     console.log(`${this.brand} ${this.model} is driving`);
//   }
// }
// // Objects
// let myCar = new Car("Toyota", "Corolla");
// let myscndCar = new Car("Honda", "Civic");

// myCar.drive();
// myscndCar.drive(); // Toyota Corolla is driving

//Encapsulation
// class BankAccount{
//   private balance: number = 1200;

//   deposit(amount: number){
//     if(amount <= 0){
//       console.log("Deposit amount must be greater than zero.");
//       return;
//     }
//     this.balance += amount;
//   }

//   get getBalance(){
//     return this.balance;
//   }
// }

// let myAccount = new BankAccount();
// myAccount.deposit(500);

// console.log(myAccount.getBalance); // BankAccount { balance: 1200 } - balance is private, so it won't be accessible directly


// class Shape{
//   draw(){
//     console.log("Shape draw hurhi hai");
//   }
// }

// class Circle extends Shape{
//   draw(){
//     console.log("Circle draw hurha hai");
//   }
// }

// class Square extends Shape{
//   draw(){
//     console.log("Square draw hurha hai");
//   }
// }

// let shape1: Shape = new Circle();
// let shape2: Shape = new Square();

// shape1.draw();
// shape2.draw();


// Inheritance
// Base class == Main class == Parent class
class Person {
  name: string;
  age: number;
  gender: string; 

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

// Derived class == Child class
class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, gender: string, subject: string) {
    super(name, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log(`${this.name} is teaching ${this.subject}`);
  }
}



let teacher = new Teacher("OWais Ahmed", 30, "Male", "React Native Course");

teacher.teach(); // OWAis Ahmed is teaching React Native Course
console.log(teacher.name); // OWAis Ahmed
console.log(teacher.age); // 30


console.log(teacher instanceof Teacher); // true
// console.log(teacher instanceof Student); // false
console.log(teacher instanceof Person); // true
