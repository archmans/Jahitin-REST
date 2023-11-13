const loginModel = require('../models/login');

const loginController = async (req, res) => {
    const {username, password} = req.body;

    try {
        const {token, idUser} = await loginModel.login({username, password});
        if (!token) {
            return res.status(401).json({
                message: 'Invalid credentials'
            });
        }
        res.status(200).json({
            message: 'Login success',
            token,
            idUser
        });
        console.log("ini token contr", token);
        console.log("ini idUser contr", idUser);
    } catch (error) {
        console.error('Error during user login:', error);
        res.status(500).json({
            message: 'Server error',
            serverMessage: error.message
        });
    }
};

module.exports = {
    loginController
};

