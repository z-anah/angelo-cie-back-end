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
    ispublic BOOLEAN,
    title VARCHAR(250) NULL,
    content mediumtext COLLATE utf8mb4_bin NOT NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;
const createTableUserTracks = `
CREATE TABLE IF NOT EXISTS usertracks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    ip VARCHAR(250) NULL,
    continent VARCHAR(250) NULL,
    country VARCHAR(250) NULL,
    region VARCHAR(250) NULL,
    url VARCHAR(250) NULL,
    created_on TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)
)
`;

// INSERT INTO
const createNewUser = `
INSERT INTO users (firstname, lastname, email, password, created_on) VALUES (?, ?, ?, ?, NOW())
`;
const createNewBlog = `
INSERT INTO blogs (ispublic, title, content, created_on) VALUES (?, ?, ?, NOW())
`;
const createNewUserTracksQuery = `
INSERT INTO usertracks (ip, continent, country, region, url, created_on) VALUES (?, ?, ?, ?, ?, NOW())
`;

// UPDATE
const updateBlogQuery = `
UPDATE blogs SET 
ispublic=IFNULL(?, ispublic), title=IFNULL(?, title), content=IFNULL(?, content) 
    WHERE blogs.id = ?;
`

// SELECT
const findUserByEmail = `
SELECT * FROM users WHERE email = ?
`;
const getBlogsQuery = `
SELECT * FROM blogs
`;
const getUserTracksQuery = `
SELECT COUNT(ip) AS count, ip, continent, country, region, url, created_on  
FROM usertracks 
GROUP BY ip, url
ORDER BY created_on DESC 
`;
const getBlogQuery = `
SELECT * FROM blogs WHERE id = ?
`;

module.exports = {
    createDB,
    dropDB,
    createTableUSers, createNewUser, findUserByEmail,
    createTableBlogs, createNewBlog, updateBlogQuery, getBlogsQuery, getBlogQuery,
    createTableUserTracks, createNewUserTracksQuery, getUserTracksQuery
};
