const { logger } = require('../../utils/logger');
const { createTableUSers: createTableUSersQuery, createTableBlogs, createTableUserTracks } = require('../queries');

(() => {
    require('../../config/db.config').query(createTableUserTracks, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Table user tracks created!');
        process.exit(0);
    });
})();
(() => {
    require('../../config/db.config').query(createTableBlogs, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Table blogs created!');
    });
})();
(() => {
    require('../../config/db.config').query(createTableUSersQuery, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Table users created!');
        process.exit(0);
    });
})();

