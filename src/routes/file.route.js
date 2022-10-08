const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const fileController = require('../controllers/file.controller');

router.route('/file/upload')
    .post(asyncHandler(fileController.fileUpload));

module.exports = router;