const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const blogController = require('../controllers/blog.controller');


router.route('/blog')
    .post(asyncHandler(blogController.create));

router.route('/blog')
    .patch(asyncHandler(blogController.updateBlog));

router.route('/blogs')
    .get(asyncHandler(blogController.getBlogs));

module.exports = router;