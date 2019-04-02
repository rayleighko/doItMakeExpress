const should = require('should/should')
const app = require('./app')
const sinon = require('sinon')

describe('app', () => {
	it('listen 함수를 가지고 있다.', () => {
		const spy = sinon.spy();

		app.listen = spy;
		app.listen();

		should(spy.called).be.equal(true);
	})
})