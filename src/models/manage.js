const dbPool = require('../config/database');

const readData = () => {
    const query = `SELECT * FROM gallery`;
    return dbPool.execute(query);
}

const createData = ({imageName, imageNameExt}) => {
    const query = `INSERT INTO gallery (imageName, imageNameExt) VALUES ('${imageName}', '${imageNameExt}')`;
    console.log(query);
    return dbPool.execute(query);
}

module.exports = {
    readData,
    createData
};