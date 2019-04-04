const debug = require('./utils/debug')('app')
const serveStatic = require('./middlewares/serveStatic')
const logger = require('./middlewares/logger')
const errors = require('./middlewares/errors')
const index = require('./routes/index')
const apiPost = require('./routes/api/post')
const App = require('./src/Application')
const app = App()

app.use(logger())
app.use(serveStatic())
app.use('/', index.listPosts())
app.use('/api/posts', apiPost.index())
app.use(errors.error404())
app.use(errors.error())

debug('App is initiated')

module.exports = app