const UserTrack = require('../models/usertrack.model');

exports.getUserTracks = (req, res) => {
    UserTrack.getUserTracks((err, data) => {
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
exports.createNewUserTracks = (req, res) => {

    const blog = new UserTrack(req.body)

    UserTrack.createNewUserTracks(blog, (err, data) => {
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