const express = require('express')
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express()
const port = 5050

const tasks = require('./routes/tasks')


//middleware
app.use(express.json())

app.get('/hello', (req, res) => {
    res.send('Task Manager App!')
})

app.use('/api/v1/tasks', tasks)


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch(error) {
        console.log(error)
    }
}

start()
