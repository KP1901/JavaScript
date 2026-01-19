// let person1 = {
//   name: "kiran",
// };

// let person2 = Object.create(person1);
// person2.salary = 500000;

// console.log(person2);
let person = {
    calAge(){
        return new Date().getFullYear() - this.birthYear
    }
}