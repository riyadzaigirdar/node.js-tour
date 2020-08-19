const path = require("path");
const fs = require("fs");

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename).ext);
// console.log(path.join(__dirname, "test", "public.html"));

// fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created");
// });

// fs.writeFile(
//   path.join(__dirname, "test", "node.txt"),
//   "hello node.js.",
//   (err) => {
//     if (err) throw err;
//     console.log("file created");
//   }
// );

// fs.appendFile(
//   path.join(__dirname, "test", "node.txt"),
//   "hello node.js. started pumping it",
//   (err) => {
//     if (err) throw err;
//     console.log("file created");
//   }
// );

// fs.readFile(path.join(__dirname, "test", "node.txt"), "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

fs.rename(
  path.join(__dirname, "test", "vue.js"),
  path.join(__dirname, "test", "angular.js"),
  (err) => {
    if (err) throw err;
    console.log("file renamed");
  }
);

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greettings() {
    console.log(`Hello ${this.name} and your age is ${this.age}`);
  }
}

module.exports = Person;
