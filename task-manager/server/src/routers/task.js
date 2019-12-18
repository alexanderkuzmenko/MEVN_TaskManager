const express = require("express")
const Task = require("./../models/task")
const router = new express.Router()
const auth = require('./../middleware/auth');

router.post("/tasks", async (req, res)=>{
    try {
        const task = new Task({
            ...req.body,
            completed: false
        });
        console.log(task);
        await task.save();
        res.status(201).send({
            success: true,
            message: 'Task saved successfully!'
        });
    } catch(error) {
        res.status(500).send(error.message);
    }
});

router.get("/tasks", async (req, res) => {
    try {
        //await req.user.populate("tasks").execPopulate();
        //const tasks = req.user.tasks;
        const tasks = await Task.find();
        res.status(200).send({tasks: tasks});
    } catch(error) {
        res.status(401).send(error.message);
    }
})

router.get("/tasks/:id", async (req, res) => {
    try{
        let task = await Task.findById(req.params.id);
        // if (task.owner != req.user.id) {
        //     res.status(404);
        //     throw new Error("This is not your task")
        // }
        // await task.populate("owner").execPopulate();
        res.status(200).send(task);
    } catch(error) {
        res.send(error.message);
    }
})

router.patch('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        if (req.body.title) {
            task.title = req.body.title;
        }
        if (req.body.description) {
            task.description = req.body.description;
        }
        await task.save();
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        await task.delete();
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

module.exports = router