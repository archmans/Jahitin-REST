require('dotenv').config();
const dbPool = require('../config/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (body) => {
    const connection = await dbPool.getConnection();
    const query = `SELECT * FROM users WHERE username = '${body.username}'`;
    try {
        const [rows] = await connection.query(query);
        if (rows.length === 0) {
            return null;
        }

        const user = rows[0];
        const isPasswordValid = await bcrypt.compare(body.password, user.password);

        if (!isPasswordValid) {
            return null;
        }
        const idUser = user.id;
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token, idUser };
    } finally {
        connection.release();
    }
};

module.exports = {
    login,
};
