let express = require('express');

// create a reference to the model
let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
    Book.find((err, bookList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.send({"books": bookList})      
        }
    });
}

module.exports.getParticularBook = (req, res, next) => {
    Book.findById(req.params.id , (err, Book) => {
        res.send({"book":Book})
    })          
}
