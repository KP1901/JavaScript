// 1 example one
let jhon = {
  name: "jhon",
  birth: 1999,
  AnnualSalary: 12000,

  get getName() {
    return this.name;
  },

  set setName(val) {
    if (val.length < 4) {
      console.log("name should be of atleast 4 character");
    } else {
      this.name = val;
    }
  },
};
console.log(jhon.getName);
jhon.setName = "ajit";
console.log(jhon.getName);

// 2 exmaple 2

let User = class {
  constructor(name, pwd, role) {
    this.name = name;
    this.password = pwd;
    this.role = role;
  }
  set setPassword(val) {
    if (val.length < 4) {
      console.log("password should be of atleast 4 character");
    } else {
      this.password = val;
    }
  }
};
let mark = new User("mark", "pass1234", "admin");
console.log(mark);
mark.setPassword = "kiran1234";
console.log(mark);
