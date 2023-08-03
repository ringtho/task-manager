const mongoose = require('mongoose')
const { Schema } = mongoose

const TaskSchema = new Schema({
    name: {
        type: String,
        required: [true, 'A name must be provided'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)