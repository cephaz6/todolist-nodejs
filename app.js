const express = require("express");
const date = require(__dirname + "/date.js");
const bodyParser = require("body-parser");

let tasks = ["Morning Exercise", "Breakfast", "Assignment Submission"];
let workTasks = ["Have Breakfast", "Warm Shower", "Drive to Work"];
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {
    let day = date.getDate();
    if (date.getDay() === "Sunday" || date.getDay() === "Saturday") {
        res.render("list", { listTitle: day, addedTasks: tasks });
    } else {
        res.redirect("/work");
    }
});

app.post("/", function(req, res) {
    const task = req.body.newtask;
    if (req.body.list === "Work Day") {
        workTasks.push(task);
        res.redirect("/work");
    } else {
        if (tasks.length < 10) {
            tasks.push(task);
        }
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", {
        listTitle: "Work Day",
        addedTasks: workTasks,
    });
});

app.post("/deleteTask", function(req, res) {
    const id = req.body.delete;
    const listType = req.body.listtype;

    if (listType === "workTasks") {
        workTasks = workTasks.filter((x) => x !== id);
        res.redirect("/work");
    } else {
        tasks = tasks.filter((e) => e !== id);
        res.redirect("/");
    }
});
app.get("/about-us", function(req, res) {
    res.render("about-us");
});
app.listen(3000, function() {
    console.log("server is running correctly");
});