const should = require('should')
const sinon = require('sinon')
const App = require('./Application')

describe('Application', () => {
	describe('listen()', () => {
		it('Run listen() in Object server', () => {
			const app = App();
			const spy = sinon.spy();
			app._server.listen = spy;
			app.listen();
			should(spy.called).be.equal(true);
		})
	})
})