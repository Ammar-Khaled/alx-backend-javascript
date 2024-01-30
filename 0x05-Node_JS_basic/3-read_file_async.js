const fs = require("fs");

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
const countStudents = (path) =>
  new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(new Error("Cannot load the database"));
      }

      if (data) {
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
        resolve(true);
      }
    });
  });

module.exports = countStudents;
