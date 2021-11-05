const express = require("express");
const connectDB = require("./config/db");

const app = express();

//  Connect Database
connectDB();

//  Init Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the Banking-Backend..." })
);

// Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/accounts", require("./routes/accounts"));

const PORT = process.env.PORT || 2520;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
