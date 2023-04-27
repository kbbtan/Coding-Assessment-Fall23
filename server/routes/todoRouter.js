// Package Imports.
var express = require('express');
var router = express.Router();

// Model Imports.
var Todo = require('../models/todoModel');

// GET all todo items.
router.get("/todos", (req, res) => {
    Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json("Error " + err));
});

// POST new todo item.
router.post("/create", (req, res) => {
    const newTodo = new Todo({
        title: req.body.title,
        description: req.body.description
    });

    newTodo.save()
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json("Error" + err));
});

// PUT existing todo item.
router.put("/editData/:id", (req, res) => {
    const editedTodoData = {
        title: req.body.title,
        description: req.body.description
    };

    Todo.findByIdAndUpdate(req.params.id, editedTodoData)
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json("Error " + err));
});

// DELETE existing todo item.
router.delete("/delete/:id", (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json("Error " + err));
});

module.exports = router;