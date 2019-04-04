let posts = [
  { title: "post 3", body: "this is post 3" },
  { title: "post 2", body: "this is post 2" },
  { title: "post 1", body: "this is post 1" }
];

const index = () => (req, res, next) => {
  const limit = req.query.limit * 1 || 2;
  const page = req.query.page * 1 || 1;

  const begin = (page - 1) * limit;
  const end = begin + limit;

  res.json(posts.slice(begin, end));
};

const create = () => (req, res, next) => {
  const { title, body } = req.body;
  const post = { title, body };

  if (!post.title || !post.body) {
    return res.status(400).send("parameter error");
  }
  posts = [post].concat(posts);

  res.status(201).json(post);
};

module.exports = {
  index,
  create
};
