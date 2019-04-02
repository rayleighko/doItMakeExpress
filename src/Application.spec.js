const should = require('should/should')
const sinon = require('sinon')
const App = require('./Application')

describe('Application', () => {
	describe('listen()', () => {
		it('server 오브젝트의 listen 함수를 실행한다.', () => {
			const app = App();
			const spy = sinon.spy();
			app._server.listen = spy;
			app.listen();
			should(spy.called).be.equal(true);
		})
	})
})