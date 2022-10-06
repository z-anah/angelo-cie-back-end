const db = require('../config/db.config');
const { createNewUserTracksQuery, getUserTracksQuery } = require('../database/queries');
const { logger } = require('../utils/logger');

class UserTrack {
    constructor({ ip,
        continent,
        country,
        region,
        url }) {
        this.ip = ip
        this.continent = continent
        this.country = country
        this.region = region
        this.url = url
    }

    static getUserTracks(cb) {
        db.query(getUserTracksQuery,
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

    static createNewUserTracks(model, cb) {
        db.query(createNewUserTracksQuery,
            [model.ip,
            model.continent,
            model.country,
            model.region,
            model.url
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

module.exports = UserTrack;