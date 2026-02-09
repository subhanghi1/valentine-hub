// const express = require("express");
// const app = express();
// const path = require("path");

// app.use(express.static("public"));

// // Show LOGIN page first
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "login.html"));
// });

// // Valentine page after login
// app.get("/valentine", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`💖 Valentine app running at http://localhost:${PORT}`);
// });



const express = require("express");
const app = express();
const path = require("path");

// ❌ Disable automatic index.html loading
app.use(express.static(path.join(__dirname, "public"), { index: false }));

// ✅ Login page FIRST
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

// ✅ Valentine page
app.get("/valentine", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(express.static("public"));

app.get("/special", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "special.html"));
});



const PORT = 3001;
app.listen(PORT, () => {
  console.log(`💖 Valentine app running at http://localhost:${PORT}`);
});




// const express = require("express");
// const app = express();
// const path = require("path");

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // ✅ ADD THIS ROUTE
// app.get("/special", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "special.html"));
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log(`💖 Valentine app running at http://localhost:${PORT}`);
// });
