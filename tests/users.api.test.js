const request = require('supertest');

const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('API Testing - Users', () => {

  test('Should return list of users', async () => {
    const response = await request(baseUrl).get('/users');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Should return error for invalid endpoint', async () => {
    const response = await request(baseUrl).get('/user');

    expect(response.status).toBe(404);
  });

});

