const express = require('express');
const router = express.Router();
const controller = require('../controllers/productoController');

// Ruta para listar todos los productos
router.get('/', controller.obtenerProductos);
// Ruta para filtrar productos
router.get('/filtrar', controller.filtrarProductos);

module.exports = router;


