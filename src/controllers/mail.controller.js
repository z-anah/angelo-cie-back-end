const MyMail = require('../models/mail.model');

exports.sendMail = (req, res) => {
    const myMail = new MyMail(req.body)
    MyMail.sendMail(myMail, (err, data) => {
        if (err) {
            res.status(500).send({
                status: "error",
                message: err.message
            });
        } else {
            res.status(201).send({
                status: "success",
                data
            });
        }
    });
};