// ---------- DATA ----------
// step -1
const courses = [
  {
    title: "JavaScript Bootcamp",
    maxStudents: 3,
    studentsEnrolled: [],
    price: 5000,
    category: "programming",
    status: "open",
  },
  {
    title: "Graphic Design Masterclass",
    maxStudents: 2,
    studentsEnrolled: [],
    price: 4000,
    category: "design",
    status: "closed",
  },
  {
    title: "Marketing Essentials",
    maxStudents: 2,
    studentsEnrolled: [],
    price: 3000,
    category: "marketing",
    status: "closed",
  },
];

const students = [
  {
    name: "Alice",
    age: 20,
    balance: 6000,
    interests: ["programming", "design"],
  },
  {
    name: "Bob",
    age: 25,
    balance: 3000,
    interests: ["marketing"],
  },
  {
    name: "Charlie",
    age: 17,
    balance: 8000,
    interests: ["design"],
  },
  {
    name: "joe",
    age: 22,
    balance: 8000,
    interests: ["design"],
  },
];
// step - 5

function findCourse(title) {
  if (typeof title !== "string") {
    return null;
  }
  return (
    courses.find(
      (course) =>
        typeof course.title === "string" &&
        course.title.toLowerCase() === title.toLowerCase()
    ) || null
  );
}
// step - 4

function findStudent(name) {
  if (typeof name !== "string") {
    return null;
  }
  return (
    students.find(
      (student) =>
        typeof student.name === "string" &&
        student.name.toLowerCase() === name.toLowerCase()
    ) || null
  );
}
function enrollStudent(course, student) {
  // course status
  if (
    typeof course.status !== "string" ||
    course.status.trim().toLowerCase() !== "open"
  ) {
    return `Enrollment closed for this course`;
  }
  //   course capacity
  if (course.studentsEnrolled.length >= course.maxStudents) {
    return `course is full.`;
  }
  // age check

  if (typeof student.age !== "number" || student.age < 18) {
    return `Student must be at least 18 years old to enroll.`;
  }
  //   balance check[]

  if (
    typeof student.balance !== "number" ||
    typeof course.price !== "number" ||
    student.balance < course.price
  ) {
    return "insufficient balance to enroll";
  }

  student.balance -= course.price;
  course.studentsEnrolled.push(student);
  course.studentsEnrolled.forEach((enrollStudent) => {
    console.log(enrollStudent);
  });

  //   console.log(`Enrollment successful for ${student.name} in ${course.title}`);
  return `Enrollment successful for ${student.name} in ${course.title}`;
}

// step -3
function enrollByNames(studentName, courseTitle) {
  // step - 4
  const student = findStudent(studentName);

  // step - 5
  const course = findCourse(courseTitle);
  if (!student) {
    return `student ${studentName} not found or invalid name format`;
  }
  if (!course) {
    return `course ${courseTitle} not found or invalid title format`;
  }
  //   step - 6
  return enrollStudent(course, student);
}

// step - 2
// enrollByNames("joe", "javascript bootcamp");
console.log(enrollByNames("joe", "javascript bootcamp"));
