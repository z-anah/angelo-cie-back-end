const { logger } = require('../../utils/logger');
const { createTableUSers: createTableUSersQuery, createTableBlogs } = require('../queries');

(() => {
    require('../../config/db.config').query(createTableUSersQuery, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Table users created!');
        // process.exit(0);
    });
})();

(() => {
    require('../../config/db.config').query(createTableBlogs, (err, _) => {
        if (err) {
            logger.error(err.message);
            return;
        }
        logger.info('Table blogs created!');
        process.exit(0);
    });
})();
