const request = require('supertest');
const app = require('../server/app');

describe('API', () => {
  it('Should get a response given a good GET request', () => request(app)
    .get('/api/bookings/1')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  it('Should auto-assign a good endpoint given a good GET request', () => request(app)
    .get('/')
    .then((response) => {
      expect(response.statusCode).toBe(302);
    }));

  it('Should 404 a bad GET request', () => request(app)
    .get('/api/&(@$Y@(^@)#(3/8989-09')
    .then((response) => {
      expect(response.statusCode).toBe(404);
    }));
});

describe('POST /api/rooms/:id/photos', () => {
  test('should respond with status code 201', () => request(app)
    .post('/api/rooms/1/photos')
    .send(photo)
    .expect(201));
});

describe('DELETE /api/rooms/:id/reviews', () => {
  test('should respond with status code 200', () => request(app)
    .delete('/api/rooms/1/reviews')
    .expect(200));

  test('should respond with a 404 for invalid id', () => request(app)
    .delete('/api/rooms/101/reviews')
    .expect(404));
});
