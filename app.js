const express = require('express');
const path = require('path');
require('dotenv').config();

const indexRoutes = require('./src/routes');
const adminRoutes = require('./src/routes/admin');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`
	🚀 Servidor corriendo!
	📝 Local: http://localhost:${PORT}
	`);
});
