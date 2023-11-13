const express = require('express');
const upload = require('../middleware/multer');

const manageController = require('../controller/manage');
const middlewareAuth = require('../middleware/authValidation');

const router = express.Router();

// READ - GET
router.get('/', middlewareAuth, manageController.readDataManageController);

// CREATE - POST
router.post('/', middlewareAuth, upload.single('image'), manageController.createDataManageController);

module.exports = router;

// // CREATE - POST
// router.post('/', manageController.createManageController);

// // UPDATE - PUT
// router.put('/:id', manageController.updateManageController);

// // DELETE - DELETE
// router.delete('/:id', manageController.deleteManageController);