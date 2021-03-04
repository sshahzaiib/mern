const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require('./src/db')


// import todo routes
const router = require('./src/routes/todo')

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api/todo', router)

app.listen(3001, () => {
  console.log("Server running on port: 3001");
});
