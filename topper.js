const student1 = {
  name: "ram",
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};

const student2 = {
  name: "shyam",
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};
const student3 = {
  name: "shyam",
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};
const student4 = {
  name: "shyam",
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};
const student5 = {
  name: "shyam",
  marks: {
    phy: 12,
    chem: 23,
    math: 34,
  },
};
const student6 = {
  name: "shyam",
  marks: {
    phy: 12,
    chem: 253,
    math: 34,
  },
};
const student7 = {
  name: "shyam",
  marks: {
    phy: 12,
    chem: 223,
    math: 34,
  },
};
const student8 = {
  name: "shyam",
  marks: {
    phy: 12,
    chem: 23,
    math: 342,
  },
};
const student9 = {
  name: "shyam",
  marks: {
    phy: 12,
    chem: 2323,
    math: 34,
  },
};
const student10 = {
  name: "shyam",
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

function mapperFunction(student) {
  const total = student.marks.phy + student.marks.chem + student.marks.math;
  return {
    name: student.name,
    total: total,
  };
}
const result = students.map(mapperFunction);

function sortFunction(a, b) {
  return a.total - b.total;
}

const sortedStudents = result.sort(sortFunction);
sortedStudents.slice(5).forEach((student) => {
  console.log(`${student.name} - ${student.total}`);
});
