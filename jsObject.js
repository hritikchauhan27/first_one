// const person = {name:"rishi",age:50,status:"awake"};
// person.dob ="27/01/2001";

// const rishi = person;
// console.log(rishi);



// constructor

// function person(name, age, dob){
//     this.Name = name;
//     this.Age = age;
//     this.DOB = dob;
// }

// const emp1 = new person("Rishi",21,"27/01/2001");
// console.log(emp1);
// let ageOfemp1 = emp1.Age;
// console.log("emp1 age = "+emp1.Age);



//classes

class employee{
    constructor(name, age, dob){
        this.Name = name;
        this.Age = age;
        this.DOB = dob;
    }
}

const emp1 = new employee("Rishi",21,"27/01/2001");
console.log(emp1);