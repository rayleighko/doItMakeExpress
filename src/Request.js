const Request = req => {
  if (!req) throw Error("don't have props");

  const partials = req.url.split("?");

  const path = partials[0] || "/";
  req.path = req.path || path;

  if (!partials[1] || !partials[1].trim()) return req;

  const queryString = partials[1].split("&").reduce((obj, p) => {
    const frag = p.split("=");
    obj[frag[0]] = frag[1];
    return obj;
  }, {});

  req.query = req.params || queryString;
  return req;
};

module.exports = Request;
