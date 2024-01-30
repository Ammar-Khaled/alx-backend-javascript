const http = require("http");
const fs = require("fs");
const hostname = "localhost";
const port = 1245;

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

        payload = [`Number of students: ${students.length}`];

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
          payload.push(
            `Number of students in ${field}: ${
              studentsByField[field].length
            }. List: ${studentsByField[field].join(", ")}`
          );
        }
        resolve(payload);
      }
    });
  });

const app = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  if (url.pathname === "/") {
    res.end("Hello Holberton School!");
  } else if (url.pathname === "/students") {
    countStudents(process.argv[2]).then((payload) => {
      res.end(`This is the list of our students\n${payload.join("\n")}`);
    });
  }
});

app.listen(port, hostname, () => {
  process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
});

module.exports = app;
