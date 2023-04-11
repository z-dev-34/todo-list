const models = require('../model');

module.exports = {
    findAllTodos: async (req, res) => {
        try {
            const todos = await models.Todo.findAll({
                order: [
                    ['id', 'DESC']
                ]
            })
            res.status(200).json(todos);

        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            });
        }
    },
    findTodoById: async (req, res) => {
        try {
            const todo = await models.Todo.findByPk(req.params.id);
            if (!todo) {
                res.status(404).json({
                    message: 'Todo not found'
                });
            } else {
                res.status(200).json(todo);
            }
        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            });
        }
    },
    createTodo: async (req, res) => {
        try {
            const todo = await models.Todo.create(req.body);
            res.status(201).json({
                message: "todo is created",
                id: todo.id
            });
        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            });
        }
    },
    updateTodoById: async (req, res) => {
        try {
            const todo = await models.Todo.findByPk(req.params.id);
            const newTodo = req.body
            if (!todo) {
                res.status(404).json({
                    message: 'Todo not found'
                });
            } else {
                newTodo.updatedAt = new Date()
                await todo.update(newTodo);
                res.status(200).json({
                    message: "todo updated"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            });
        }

    },
    updateStateTodoById: async (req, res) => {
        try {
            const todo = await models.Todo.findByPk(req.params.id);
            if (!todo) {
                res.status(404).json({
                    message: 'Todo not found'
                });
            } else {
                const updateTodo = todo.isCompleted = req.body
                await todo.update(updateTodo);
                res.status(200).json({
                    message: "todo Done"
                });
            }
        } catch (error) {
            res.status(500).json({
                message: 'Server error'
            });
        }

    }

}