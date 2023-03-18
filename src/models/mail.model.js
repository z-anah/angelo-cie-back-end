const db = require('../config/db.config');
const { logger } = require('../utils/logger');
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: "angelo-cie.com",
    port: 465,
    auth: {
        user: "developer@angelo-cie.com",
        pass: "Masiso09",
    },
});

class MyMail {
    constructor({ to, subject, text }) {
        this.to = to
        this.subject = subject
        this.text = text
    }

    static sendMail(myMail, cb) {
        let res = null

        try {
            const { to = user, subject, text } = myMail;
            const mailOptions = {
                to,
                subject,
                text,
                attachments: [
                    {   // file on disk as an attachment
                        filename: 'pic.png',
                        path: 'public/images/1665288168076.png' // stream this file
                    },]
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) throw new Error(error);
                else cb(null, info);
            });
        } catch (error) {
            logger.error(error.message);
            cb(error, null);
            return;
        }
    }
}

module.exports = MyMail;