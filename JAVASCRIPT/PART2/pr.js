const team = {
  name: "Developer",
  members: ["kiran", "Alex"],
  showMember: function () {
    this.members.forEach(
      function (member) {
        console.log(`${member} is in ${this.name}`);
      }.bind(this),
    );
  },
};
team.showMember();
