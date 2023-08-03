const express = require('express')
const connectDB = require('./db/connect')
require('dotenv').config()
const app = express()
const tasks = require('./routes/tasks')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')


//middleware
app.use(express.json())


app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 5050
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`server is listening on port ${port}...`))
    } catch(error) {
        console.log(error)
    }
}

start()
