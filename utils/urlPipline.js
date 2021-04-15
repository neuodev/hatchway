module.exports = function urlPipline(tags, sortBy, direction) {
  let url = `https://api.hatchways.io/assessment/blog/posts?tag=${tags}`;

  if (sortBy) {
    url += `&sortBy=${sortBy}`;
  }

  if (direction) {
    url += `&direction=${direction}`;
  }

  return url;
};
