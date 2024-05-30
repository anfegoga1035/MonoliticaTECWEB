const { Router } = require('express');
const { 
    createUniversidad, 
    getUniversidades,
    updateUniversidadByID
} = require('../controllers/universidad');

const router = Router();

// crear
router.post('/', createUniversidad);

// consultar todos
router.get('/', getUniversidades);

// actualizar por ID
router.put('/:id', updateUniversidadByID);

module.exports = router;

