// votre application Express
const request = require('supertest');
const app = require('../server');

const todos = [{
        id: 1,
        title: "tache une",
        description: "test to test",
        isCompleted: false,
        createdAt: "2023-04-01",
        updatedAt: "2023-04-01"
    },
    {
        id: 2,
        title: "tache 2",
        description: "sefsdsdfsdf",
        isCompleted: false,
        createdAt: "2023-04-01",
        updatedAt: "2023-04-01"
    }
]
describe('GET /api/todos', () => {
    it('should return all todo items', async () => {
        const res = await request(app).get('/api/todos/');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(todos);
    });
});

describe('PUT /todos/:id', () => {
    test('updates an existing todo item', async () => {
        const todo = {
            id: 1,
            title: "tache une",
            description: "test to test",
            isCompleted: false,
            createdAt: "2023-04-01",
            updatedAt: "2023-04-01"
        }
        const response = await request(app)
            .put('/api/todos/1')
            .send(todo)
            .set('Accept', 'application/json');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(todo);
    });
});