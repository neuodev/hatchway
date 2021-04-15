const exrpess = require('express');
const { getPosts } = require('../controllers/posts');
const router = exrpess.Router();

router.route('/').get(getPosts);
module.exports = router;
