const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // if (req.url === "/") {
  //   if (req.method === "POST") {
  //     console.log(req);
  //     // const username = req.body.username;
  //     // const age = req.body.age;
  //     // console.log(username, age);
  //   }
  //   fs.readFile(
  //     path.join(__dirname, "public", "index.html"),
  //     "utf8",
  //     (err, data) => {
  //       if (err) {
  //         throw err;
  //       }
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(data);
  //     }
  //   );
  // } else if (req.url === "/about") {
  //   fs.readFile(
  //     path.join(__dirname, "public", "about.html"),
  //     "utf-8",
  //     (err, data) => {
  //       if (err) throw err;
  //       res.writeHead(200, { "Content-type": "text/html" });
  //       res.end(data);
  //     }
  //   );
  // }
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );

  let extention = path.extname(filePath);

  let contentType = "text/html";

  switch (extention) {
    case ".css":
      contentType = "text/css";
    case ".js":
      contentType = "text/javascript";
    case ".json":
      contentType = "application/json";
    case ".jpg":
      contentType = "image/jpg";
    case ".png":
      contentType = "image/png";
      break;
  }
  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        fs.readFile(
          path.join(__dirname, "public", "404.html"),
          "utf8",
          (err, content) => {
            // if (err) throw err;
            // res.writeHead(200, { "Content-type": "text/html" });
            console.log("yes");
            res.end("<h1>not found</h1>");
          }
        );
      } else {
        res.writeHead(err.code, { "Content-type": "text/html" });
        res.end(`Server error ${err.code}`);
      }
    }
    res.writeHead(200, { "Content-type": contentType });
    res.end(content);
  });
});

const PORT = process.env.secret || 5000;

server.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
