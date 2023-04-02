// imports
const express = require('express');
const todoController = require('./routes/todoController')

//Router
exports.router = (function () {
    const apiRouter = express.Router();
    // Users routes
    apiRouter.route('/todos').get(todoController.findAllTodos);
    apiRouter.route('/todos/:id').get(todoController.findTodoById);
    apiRouter.route('/todos').post(todoController.createTodo);
    apiRouter.route('/todos/:id').put(todoController.updateTodoById);



    return apiRouter;
})();