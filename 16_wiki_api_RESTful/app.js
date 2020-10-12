const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost:27017/wikiDB", {useNewUrlParser: true, useUnifiedTopology: true});

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "No title specified"]
    },
    content: {
        type: String,
        required: [true, "No content"]        
    }
});

const Article = mongoose.model("Article", articleSchema);

// ******** requests targeting all articles *********** 

app.route("/articles")
    .get((req, res) => {
        Article.find({}, (err, found) => {
            (!err) ? res.send(found) : res.send(err);
        })
    })
    .post((req, res) => {
        let title = req.body.title;
        let content = req.body.content;
        
        console.log(`title: ${title} \ncontent: ${content}`);
        
        let article = new Article({
            title: title,
            content: content
        });
        
        article.save(err => {
            (!err) ? res.send("successfully added article") : res.send(err);     
        });
    })
    .delete((req, res) => {
        Article.deleteMany({}, err => {
            (!err) ? res.send("deleted all articles successfully") : res.send(err);
        });
    });

// ******** requests targeting a specific article ***********

app.route("/articles/:title")
    .get((req, res) => {
        Article.findOne({title: req.params.title}, (err, found) => {
            if(!err) {
                (found) ? res.send(found) : res.send("No Articles Found");
            }
            else
                res.send(err);
        });
    })
    .put((req, res) => {
        Article.update({ title: req.params.title },
            { title: req.body.title, content: req.body.content },
            { overwrite: true }, 
            err => {
                (!err) ? res.send("Update Successful") : res.send(err);
            }
        );
    })
    .patch((req, res) => {
        Article.update({ title: req.params.title },
            {$set: req.body},
            err => {
                (!err) ? res.send("Update Successful") : res.send(err);
            }
        );
    })
    .delete((req, res) => {
        Article.deleteOne({ title: req.params.title }, err => {
            (!err) ? res.send("Deleted article successfully") : res.send(err);
        });
    });


// start server
app.listen(3000, (err) => {
    if(!err)
        console.log("running on port 3000");
});