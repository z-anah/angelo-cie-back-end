const router = require('express').Router();
const { asyncHandler } = require('../middlewares/asyncHandler');
const mailController = require('../controllers/mail.controller');

router.route('/mail')
    .post(asyncHandler(mailController.sendMail));

module.exports = router;