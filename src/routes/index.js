const express = require('express');
const path = require('path');
const router = express.Router();
const { login } = require('../controllers/authController');

// Rutas de páginas
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/login.html'));
});

router.get('/locations', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/locations.html'));
});

router.get('/vendors', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/vendors.html'));
});

// API routes
router.post('/api/login', login);

module.exports = router;
