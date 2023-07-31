const express = require('express')
const app = express()
const port = 5050

const tasks = require('./routes/tasks')


//middleware
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task Manager App!')
})

app.use('/api/v1/tasks', tasks)




app.listen(port, console.log(`server is listening on port ${port}...`))