const express = require("express");
const colors = require("colors");
const { use } = require("./routes/goalRoutes");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.port || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));


app.use(errorHandler);

// console.log("Hello World");

app.listen(port, () => console.log(`Server running on port ${port}`));
