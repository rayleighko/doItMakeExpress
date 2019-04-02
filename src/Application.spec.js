const should = require('should/should')
const sinon = require('sinon')
const App = require('./Application')

describe('Application', () => {
	let app;

	beforeEach(()=> {
		app = App()
	})

	describe('listen()', () => {
		it('server 오브젝트의 listen 함수를 실행한다.', () => {
			const spy = sinon.spy();
			app._server.listen = spy;
			app.listen();
			should(spy.called).be.equal(true);
		})
	})

	describe('use()', () => {
		it('Middleware 모듈 인스턴스의 add() 메소드를 실행한다', () => {
			const spy = sinon.spy();
			app._middleware.add = spy;
			const mw1 = () => null;

			app.use(mw1);

			should(spy.called).be.equal(true);
		})
	});
})