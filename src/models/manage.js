const dbPool = require('../config/database');

const readData = () => {
    const query = `SELECT * FROM gallery`;
    return dbPool.execute(query);
}

module.exports = {
    readData,
};