// votre application Express
const request = require('supertest');
const app = require('../server');
let todos = [];
describe('POST /todos', () => {
    it('creates a new todo item', async () => {
        const todo = {
            "title": "zak",
            "description": null,
            "isCompleted": false
        };
        const response = await request(app)
            .post('/api/todos')
            .send(todo)
            .set('Accept', 'application/json');
        todos = [{
            id: 1,
            "title": "zak",
            "description": null,
            "isCompleted": false,
        }]
        expect(response.status).toBe(201);
    });
});
describe('PUT /todos/:id', () => {
    it('updates an existing todo item', async () => {
        const todo = {
            "id": 1,
            "title": "zak",
            "description": null,
            "isCompleted": false,
            "createdAt": "2023-04-15T22:00:00.000Z",
            "updatedAt": new Date()
        }
        const response = await request(app)
            .put('/api/todos/1')
            .send(todo)
            .set('Accept', 'application/json');
        expect(response.status).toBe(200);
    });
});
describe('PATCH /todos/:id', () => {
    it('updates state an existing todo item', async () => {
        const todo = {
            "id": 1,
            "title": "zak",
            "description": null,
            "isCompleted": true,
            "createdAt": "2023-04-15T22:00:00.000Z",
            "updatedAt": new Date()
        }
        const response = await request(app)
            .patch('/api/todos/1')
            .send(todo)
            .set('Accept', 'application/json');
        expect(response.status).toBe(200);
    });
})
describe('GET /api/todos', () => {
    it('should return all todo items', async () => {
        const res = await request(app).get('/api/todos/');
        expect(res.statusCode).toEqual(200);
    });
});