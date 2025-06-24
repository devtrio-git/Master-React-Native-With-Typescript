
// Typecasting...


// let var1:string  = "Devtrio";
// let var2:number  = 10;
// console.log(var1, var2);

// let var3: string | number = 'services';
// var3 = 10;

// console.log(var3);

// xxxxxxxxxxxxxxxxxxxxxxxxxx
// let arr: (number | string)[] = [10, 2, 4, 5, 6];
// arr.push("11");
// arr.push(11);
// arr.push(101);

// console.log(arr);


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// let obj: { name: string, age: number, email?: string } = {
//   name: "Malik",
//   age: 22,
// }

// obj.email = "malik@gmail.com";
// console.log(obj);




// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// type TObj = { name: string, age: number, email?: string }


// let obj: TObj = {
//   name: "Malik",
//   age: 22,
// }

// obj.email = "malik@gmail.com";
// console.log(obj);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// non null assertion operation (!)

const num1 = document.getElementById("inputOne")! as HTMLInputElement;
const num2 = document.getElementById("inputTwo")! as HTMLInputElement;
const btn = document.getElementById("btn")! as HTMLButtonElement;


function sumUp(n1: number, n2: number): number {
  return n1 + n2;
}


btn?.addEventListener('click', () => {
  console.log('Sum = ', sumUp(Number(num1.value), Number(num2.value)));

})