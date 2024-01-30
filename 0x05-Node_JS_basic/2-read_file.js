const fs = require("fs");
/**
 * Count the number of students in the given file
 * @param {String} path - path to the file to read
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf-8");
    students = data.split("\n");
    // remove headers
    students.shift();
    // remove empty lines at the end of the file
    let i = students.length - 1;
    while (students[i] === "") {
      students.pop();
      i--;
    }
    console.log(`Number of students: ${students.length}`);

    let studentsByField = {};
    for (let s of students) {
      studentData = s.split(",");
      firstName = studentData[0];
      field = studentData[3];
      if (!studentsByField.hasOwnProperty(field)) {
        studentsByField[field] = [firstName];
      } else {
        studentsByField[field].push(firstName);
      }
    }

    for (let field in studentsByField) {
      console.log(
        `Number of students in ${field}: ${
          studentsByField[field].length
        }. List: ${studentsByField[field].join(", ")}`
      );
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
