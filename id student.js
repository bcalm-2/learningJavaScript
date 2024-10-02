const student1 = {
  name: "ram",
  id: 1,
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};

const student2 = {
  name: "shyam",
  id: 2,
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};
const student3 = {
  name: "shyam",
  id: 3,
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};
const student4 = {
  name: "shyam",
  id: 4,
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};
const student5 = {
  name: "shyam",
  id: 5,
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};
const student6 = {
  name: "shyam",
  id: 6,
  marks: {
    phy: 12,
    chem: 253,
    math: 34,
  },
};
const student7 = {
  name: "shyam",
  id: 7,
  marks: {
    phy: 12,
    chem: 223,
    math: 34,
  },
};
const student8 = {
  name: "shyam",
  id: 8,
  marks: {
    phy: 12,
    chem: 23,
    math: 342,
  },
};
const student9 = {
  name: "shyam",
  id: 9,
  marks: {
    phy: 12,
    chem: 2323,
    math: 34,
  },
};
const student10 = {
  name: "shyam",
  id: 10,
  marks: {
    phy: 1,
    chem: 23,
    math: 34,
  },
};
const students = [];
students.push(student1);
students.push(student2);
students.push(student3);
students.push(student4);
students.push(student5);
students.push(student6);
students.push(student7);
students.push(student8);
students.push(student9);
students.push(student10);
const id = prompt("enter id");
function getstudent(student) {
  return (student.id = id);
}

const filterstudents = students.filter(getstudent);

alert(JSON.stringify(filterstudents[0]));
