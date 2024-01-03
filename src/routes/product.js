const express = require('express');
const router = express.Router();

const productController = require('../app/controllers/ProductController');

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);

router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;
