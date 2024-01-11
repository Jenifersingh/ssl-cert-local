import express from "express";
import https from "https";
import fs from "fs";

const app = express();

app.use(express.static("static"));

const port = 3000;

const server = https.createServer(
  {
    key: fs.readFileSync("./cert/ca/private.pem"),
    cert: fs.readFileSync("./cert/ca/cert.pem"),
    // ca: fs.readFileSync("./cert/ca/cert.pem"),
  },
  app
);

server.listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
});

// import https from "https";
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const port = 3000;

// const server = https.createServer(
//   {
//     key: fs.readFileSync("./cert/ca/private.pem"),
//     cert: fs.readFileSync("./cert/ca/cert.pem"),
//   },
//   (req, res) => {
//     let staticFilePath = path.join(__dirname, "static", "index.html");

//     console.log(staticFilePath);

//     fs.readFileSync(staticFilePath, (err, data) => {
//       console.log(data);
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.end(data);
//     });
//   }
// );

// server.listen(port, () => {
//   console.log("Server started");
// });
