let usr = {
  name: "kiran",
  contact: {
    address: "udgir",
    details: {
      age: 26,
      greet() {
        console.log("hi");
      },
    },
  },
};

user?.contact?.details?.greet?.() ?? "not exist";
