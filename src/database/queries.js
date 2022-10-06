const { DB_NAME } = require('../utils/secrets')

const createDB = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;

const dropDB = `DROP DATABASE IF EXISTS ${DB_NAME}`;

// CREATE TABLE
const createTableUSers = `
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    firstname VARCHAR(50) NULL,
    lastname VARCHAR(50) NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;
const createTableBlogs = `
CREATE TABLE IF NOT EXISTS blogs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    isPublic BOOLEAN,
    content mediumtext COLLATE utf8mb4_bin NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;

// INSERT INTO
const createNewUser = `
INSERT INTO users VALUES(null, ?, ?, ?, ?, NOW())
`;
const createNewBlog = `
INSERT INTO blogs VALUES(null, ?, ?, NOW())
`;

// UPDATE
const setIsPublicBlog = `
UPDATE blogs SET isPublic = ? WHERE blogs.id = ?;
`

// SELECT
const findUserByEmail = `
SELECT * FROM users WHERE email = ?
`;
const getBlogsQuery = `
SELECT * FROM blogs
`;

module.exports = {
    createDB,
    dropDB,
    createTableUSers, createNewUser,
    createTableBlogs, createNewBlog, setIsPublicBlog, getBlogsQuery,
    findUserByEmail
};
