// votre application Express
const request = require('supertest');
const app = require('../server');

const todos = [{
        id: 1,
        title: "tache 1",
        description: "sefsdsdfsdf",
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