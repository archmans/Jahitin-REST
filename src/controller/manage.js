const manageModel = require('../models/manage')

const readDataManageController = async (req, res) => {
    const { idUser } = req.params;
    try {
        const [data] = await manageModel.readData(idUser);
        console.log(data);
        res.json({
            message: 'GET all gallery success',
            data: {
                idUser: idUser,
                data: data
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server error',
            serverMessage: error,
        })
    }
}

const createDataManageController = async (req, res) => {
    const { idUser } = req.params;
    try {
        const imageName = req.body.imageName;
        const imagePath = req.file.filename;
    
        await manageModel.createData({
            imageName: imageName,
            imageNameExt: imagePath,
            idUser: idUser
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