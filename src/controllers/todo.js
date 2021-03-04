const Todo = require("../models/todo")

const createItem = (req, res) => {
  // getting body from request
    const body = req.body
    if (!body) {
      // if body is not present: send an error or body is undefined
        return res.status(400).json({
            success: false,
            error: 'You must provide an item',
        })
    }

    // create a new todo in database if body is present
    const todo = new Todo(body)


    // if there is some error creating a new entry: return a response with an error
    if(!todo){
        return res.status(400).json({ success: false, error: err })
    }


    todo.save().then(() => {
        return res.status(200).json({
            success: true,
            id: todo._id,
            todo: todo.todo,
        })
    })
    .catch(error => {
        return res.status(400).json({
            error,
            message: 'todo item not created',
        })
    })
}

const getTodos = async (req, res) => {
    await Todo.find({}, (err, todos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        // todo.length === 0 : !false 
        if (!todos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Item not found` })
        }
        return res.status(200).json({ success: true, data: todos })
    }).catch(err => console.log(err))
}

module.exports = {createItem, getTodos}