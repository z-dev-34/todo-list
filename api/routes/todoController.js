const models = require('../model');

module.exports = {
    findAllTodos: async (req, res) => {
        try {
            const todos = await models.Todo.findAll()
            res.status(200).json(todos);

        } catch (error) {
            console.error(error);
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
                res.json(todo);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Server error'
            });
        }
    }
}