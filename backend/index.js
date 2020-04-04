require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require("./api");
const cors = require('cors');

const app = express();

// connect to DB
mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DBNAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, (err) => {
  if (!err){
    console.log("DB connected!")
  } else {
    console.log(err);
  }
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);
// placing of middlewares matters

app.listen(process.env.PORT, () => {console.log(`App is running on port ${process.env.PORT}`)});