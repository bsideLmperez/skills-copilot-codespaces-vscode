// Create web server
var express = require('express');
var app = express();
var fs = require("fs");

// Create comments
app.post('/addComment', function (req, res) {
    // Get the existing comments
    fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
        comments = JSON.parse(data);

        // Add new comment
        comments["comment" + req.body.id] = req.body.comment;

        console.log(comments);
        res.end(JSON.stringify(comments));
    });
})

// Delete comments
app.delete('/deleteComment', function (req, res) {
    // Get the existing comments
    fs.readFile(__dirname + "/" + "comments.json", 'utf8', function (err, data) {
        comments = JSON.parse(data);

        // Delete comment
        delete comments["comment" + req.body.id];