const students = [
  {
    name: "Alice",
    usn: "A123",
    fees: 2500,
    marks: 85,
  },
  {
    name: "Bob",
    usn: "B456",
    fees: 3000,
    marks: 90,
  },
  {
    name: "Charlie",
    usn: "C789",
    fees: 2000,
    marks: 78,
  },
];

function searchStudentByUSN(usn) {
  for (const student of students) {
    if (student.usn === usn) {
      return student;
    }
  }
  return null;
}

const usnToSearch = "B456";
const foundStudent = searchStudentByUSN(usnToSearch);

if (foundStudent) {
  console.log("Student found:", foundStudent);
} else {
  console.log("Student not found");
}
