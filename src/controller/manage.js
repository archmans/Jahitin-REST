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

const createDataManageController = async (req, res) => {
    try {
        const imageName = req.body.imageName;
        const imagePath = req.file.filename;
    
        await manageModel.createData({
            imageName: imageName,
            imageNameExt: imagePath,
        });
        res.status(201).json({
            message: 'CREATE new gallery success',
            data: {
            },
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

module.exports = {
    readDataManageController,
    createDataManageController
}