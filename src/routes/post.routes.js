const express = require('express')
const router = express.Router()
const postController =   require('../controllers/posts.controller');
// Retrieve all employees
router.get('/', postController.findAll);
// Create a new employee
router.post('/', postController.create);
// Retrieve a single employee with id
router.get('/:id', postController.findById);
// Update a employee with id
router.put('/:id', postController.update);
// Delete a employee with id
router.delete('/:id', postController.delete);
module.exports = router