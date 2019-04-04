const debug = require("./utils/debug")("app");
const logger = require("morgan");
const errors = require("./middlewares/errors");
const index = require("./routes/index");
const apiPost = require("./routes/api/post");
const bodyParser = require("body-parser");
const App = require("./src/Application");
const app = App();

app.use(logger("dev"));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", index.listPosts());
app.get("/api/posts", apiPost.index());
app.post("/api/posts", apiPost.create());
app.use(errors.error404());
app.use(errors.error());

debug("App is initiated");

module.exports = app;
