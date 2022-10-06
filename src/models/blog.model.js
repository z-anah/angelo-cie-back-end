const db = require('../config/db.config');
const { createNewBlog, updateBlogQuery, getBlogsQuery } = require('../database/queries');
const { logger } = require('../utils/logger');

class Blog {
    constructor({ id, ispublic, content }) {
        this.id = id;
        this.ispublic = ispublic;
        this.content = content;
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
    static updateBlog(newBlog, cb) {
        db.query(updateBlogQuery,
            [
                newBlog.ispublic,
                newBlog.content,
                newBlog.id
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id: newBlog.id,
                    ispublic: newBlog.ispublic,
                    content: newBlog.content,
                });
            });
    }

    static create(newBlog, cb) {
        db.query(createNewBlog,
            [
                newBlog.ispublic,
                newBlog.content
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id: res.insertId,
                    ispublic: newBlog.ispublic,
                    content: newBlog.content
                });
            });
    }
}

module.exports = Blog;