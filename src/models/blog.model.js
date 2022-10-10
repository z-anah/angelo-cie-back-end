const db = require('../config/db.config');
const { createNewBlog, updateBlogQuery, getBlogsQuery, getBlogQuery } = require('../database/queries');
const { logger } = require('../utils/logger');

class Blog {
    constructor({ id, ispublic, content, image }) {
        this.id = id;
        this.ispublic = ispublic;
        this.content = content;
        this.image = image;
    }

    static getBlog(blog, cb) {
        db.query(getBlogQuery,
            [
                blog.id
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null,
                    res[0]
                );
            });
    }

    static getBlogs(cb) {
        db.query(getBlogsQuery,
            [
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null,
                    res
                );
            });
    }
    static updateBlog(blog, cb) {
        db.query(updateBlogQuery,
            [
                blog.ispublic,
                blog.content,
                blog.title,
                blog.id
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, res);
            });
    }

    static create(blog, cb) {
        db.query(createNewBlog,
            [
                blog.ispublic,
                blog.title,
                blog.content,
                blog.image
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, res);
            });
    }
}

module.exports = Blog;