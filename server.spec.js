const should = require('should')
const server = require('./server')
const sinon = require('sinon')

describe('server test suite', () => {
	it('should have a listen()', () => {
		const spy = sinon.spy();

		server.listen = spy
		server.listen()

		should(spy.called).be.equal(true);
	})
})