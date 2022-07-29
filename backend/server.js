const express = require("express");
const { use } = require("./routes/goalRoutes");
const dotenv = require("dotenv").config();
const port = process.env.port || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

// console.log("Hello World");

app.listen(port, () => console.log(`Server running on port ${port}`));
