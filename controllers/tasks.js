const getTasks = (req, res) => {
    res.send('All Items')
}

const createTask = (req, res) => {
    res.send('create Task')
}

const getTask = (req, res) => {
    res.send('Single Task')
}

const updateTask = (req, res) => {
    res.send('Update Task')
}

const deleteTask = (req, res) => {
    res.send('Delete Task')
}



module.exports = { getTasks, getTask, createTask, updateTask, deleteTask }