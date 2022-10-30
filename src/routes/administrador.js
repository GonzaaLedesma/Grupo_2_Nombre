const express = require('express');
const administradorController = require("../controllers/administradorControllers")
const multer = require('multer')
const router = express.Router();
const path = require('path');

// Multer code
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/imagenes/Catalogo'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'group-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

// Create
router.get('/creacion', administradorController.creacion);
router.post('/', upload.single('fotoEvento'), administradorController.creacionPost);

// Update
router.get('/edicion/:id', administradorController.edicion);
router.put('/', administradorController.edicionPut);

// Delete
router.delete('/:id', administradorController.destroy); 

module.exports = router;

