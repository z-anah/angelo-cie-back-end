const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const usertrackController = require('../controllers/usertrack.controller');

router.route('/usertrack')
    .post(asyncHandler(usertrackController.createNewUserTracks));

router.route('/usertracks')
    .get(asyncHandler(usertrackController.getUserTracks));

module.exports = router;