const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/auth');
const { getVendors } = require('../controllers/vendorController');

router.get('/vendors', verifyToken, isAdmin, getVendors);

module.exports = router;
