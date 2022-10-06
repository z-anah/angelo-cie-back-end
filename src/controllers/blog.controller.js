const Blog = require('../models/blog.model');

exports.getBlog = (req, res) => {
    const blog = new Blog(req.params)
    Blog.getBlog(blog, (err, data) => {
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
exports.updateBlog = (req, res) => {
    const blog = new Blog(req.body)

    Blog.updateBlog(blog, (err, data) => {
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

    const blog = new Blog({ ispublic: false, ...req.body })

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