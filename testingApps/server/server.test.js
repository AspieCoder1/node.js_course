const request = require('supertest');
const expect = require('expect')

var app = require('./server.js').app;

describe('Server', () => {
	describe('GET /', () => {
		it('should return hello world response', (done) => {
			request(app)
				.get('/')
				.expect((res) => {
					expect(res.body).toInclude({
						error: 'Page not found'
					})
				})
				.expect(404)
				.end(done);
		});
	});

	describe('GET /users', () => {
		it('should return hello user response', (done) => {
			request(app)
				.get('/user')
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'Luke',
						age: 16
					})
				})
				.expect(200)
				.end(done);
		});
	});
});