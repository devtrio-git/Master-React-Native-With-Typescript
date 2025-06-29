
interface IAddress {
  street: string;
  city: string;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
}

class User implements IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  fullAddress: string;

  constructor(data: IUser) {
    this.id = data.id;
    this.name = data.name;
    this.username = data.username;
    this.email = data.email;
    this.address = data.address;
    this.fullAddress = this.getFullAddress(data.address.street, data.address.city);
  }

  getFullAddress(street: string, city: string): string {
    return `${street} ${city}`;
  }

}


async function fetchUsers() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: IUser[] = await res.json();
    const users = data.map(u => new User(u));
    console.log(users, 'users models');
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}


fetchUsers();




// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Promise//


const myPromise: Promise<string> = new Promise((res, rej) => {
  let x = 10;
  if (x > 5) {
    res("Success");
  }
  else {
    rej("Failed");
  }
})

myPromise.then(data => console.log(data)).catch(err => console.log(err));


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// bad code example
// interface IPagedUsersResponsex {
//   data: IUser[];
//   page: number;
//   size: number;
//   totalPages: number;
// }

// interface IPagedTeacherResponsex {
//   data: ITeacher[];
//   page: number;
//   size: number;
//   totalPages: number;
// }

// Good code example
interface IPaginationResponse {
  page: number;
  size: number;
  totalPages: number;
}




// interface IPagedUsersResponse extends IPaginationResponse {
//   data: IUser[];
// }

// interface IPagedTeacherResponse extends IPaginationResponse {
//   data: ITeacher[];
// }


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// function mergedObject(obj1: object, obj2: object) {
//   return { ...obj1, ...obj2 };
// }

function mergedObject<U extends object, V extends object>(obj1: U, obj2: V): U & V {
  return { ...obj1, ...obj2 };
}


const result = mergedObject({ name: "John" }, { age: 30 });



console.log(result, 'result');
