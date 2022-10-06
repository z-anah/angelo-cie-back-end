const Blog = require('../models/blog.model');

exports.getBlogs = (req, res) => {
    Blog.getBlogs((err, data) => {
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
exports.updateIsPublic = (req, res) => {
    const { id, ispublic } = req.body;

    const blog = new Blog({ id, ispublic })

    Blog.updateIsPublic(blog, (err, data) => {
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
exports.create = (req, res) => {
    const { content } = req.body;

    const blog = new Blog({ ispublic: false, content })

    Blog.create(blog, (err, data) => {
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