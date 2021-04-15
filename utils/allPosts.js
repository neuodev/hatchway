const axios = require('axios');
const urlPipline = require('./urlPipline');
async function combinePosts(tags, sortBy, direction) {
  let posts = [];
  // use set to prevent dublication 
  const idSet = new Set();
  tags = tags.split(',');
  for (let i = 0; i < tags.length; i++) {
    const tag = tags[i];
    let url = urlPipline(tag, sortBy, direction);
    const { data } = await axios.get(url);
    posts = [...posts, ...data.posts];
  }
  let uniquePosts = [];
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if (!idSet.has(post.id)) {
      uniquePosts.push(post);
      idSet.add(post.id);
    }
  }
 
  return uniquePosts;
}

module.exports = combinePosts;
