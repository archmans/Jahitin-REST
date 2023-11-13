const express = require('express');

const manageController = require('../controller/manage');
const middlewareAuth = require('../middleware/authValidation');

const router = express.Router();

// READ - GET
router.get('/', middlewareAuth, manageController.readDataManageController);

module.exports = router;

// // CREATE - POST
// router.post('/', manageController.createManageController);

// // UPDATE - PUT
// router.put('/:id', manageController.updateManageController);

// // DELETE - DELETE
// router.delete('/:id', manageController.deleteManageController);