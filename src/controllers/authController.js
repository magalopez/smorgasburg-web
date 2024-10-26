const { generateToken } = require('../utils/jwt');

// Datos de prueba
const users = [
    { id: 1, email: 'admin@test.com', password: 'admin123', role: 'admin' },
    { id: 2, email: 'vendor@test.com', password: 'vendor123', role: 'vendor' }
];

exports.login = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = generateToken(user);
    res.json({ token });
};
