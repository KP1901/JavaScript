for (let i = 1; i <= 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// var does NOT create a new scope per loop iteration, so all callbacks share the same i.
/*
     one LE      Three LEs:
    i = 4        i = 1
                 i = 2
                 i = 3
It creates the same Lexical Environment NOT because it’s global, but because var is function-scoped.                 
*/

const team = {
  name: "Developer",
  members: ["kiran", "ajit"],
  showMembers() {
    this.members.forEach((member) => {
      console.log(`${member} is in ${this.name}`);
    });
  },
};
team.showMembers();
