const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

const getTasks = asyncWrapper (async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks, amount: tasks.length })
})

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        if(!task) {
            return res.status(404).json({msg: `No task with id: ${req.params.id}`})
        }
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const updateTask = async (req, res) => {
    try {
        const {id: taskId} = req.params
        const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
            new: true, runValidators: true
        })
        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskId}`})
        }
        res.status(200).json({ task })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskId} = req.params
        const task = await Task.findOneAndDelete({_id: taskId})
        if(!task) {
            return res.status(404).json({msg: `No task with id: ${taskId}`})
        }
        res.status(200).json({ task })

    } catch (err) {
        res.status(500).json({ msg: err })
    }
}



module.exports = { getTasks, getTask, createTask, updateTask, deleteTask }