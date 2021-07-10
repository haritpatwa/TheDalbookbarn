var express = require('express');
const mongoose = require('mongoose');

var app = express();

const DB = "mongodb+srv://csci5709user:csci5709@cluster0.xklxu.mongodb.net/theDalBookBarn?retryWrites=true&w=majority"
mongoose.connect(DB, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => { console.log('Connected to DB..') })
  .catch((err) => { console.log('Error while connecting to Db '+err); });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
    console.log('App listening on port 3000..');
})

module.exports = app;
