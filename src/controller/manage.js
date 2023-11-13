const manageModel = require('../models/manage')

const readDataManageController = async (req, res) => {
    console.log(req.body);
    try {
        const [data] = await manageModel.readData();
        res.json({
            message: 'GET all gallery success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    readDataManageController
}