const dbPool = require('../config/database');

const readData = (idUser) => {
    const query = `SELECT * FROM gallery WHERE idUser = ${idUser}`;
    return dbPool.execute(query);
}

const createData = ({imageName, imageNameExt, idUser}) => {
    const query = `INSERT INTO gallery (imageName, imageNameExt, idUser) VALUES ('${imageName}', '${imageNameExt}', ${idUser})`;
    console.log(query);
    return dbPool.execute(query);
}

module.exports = {
    readData,
    createData
};