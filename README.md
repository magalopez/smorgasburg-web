# Smorgasburg Lima - Mercado Gastronómico

## Descripción
Smorgasburg Lima es una plataforma web que conecta a vendedores de comida con clientes en diferentes ubicaciones de Lima. El proyecto está diseñado para mostrar la rica diversidad gastronómica de la ciudad, incluyendo comida peruana tradicional, fusión e internacional.

## Características Principales
- 🍽️ Catálogo de vendedores por categorías
- 📍 Múltiples ubicaciones en Lima (Miraflores, Barranco, San Isidro)
- 🔐 Sistema de autenticación para vendedores y administradores
- 📱 Diseño responsive

## Tecnologías Utilizadas
- Frontend:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
- Backend:
  - Node.js
  - Express.js
- Autenticación:
  - JWT (JSON Web Tokens)

## Estructura del Proyecto
```
smorgasburg-web/
├── public/
│   ├── css/
│   │   ├── header.css
│   │   ├── index.css
│   │   ├── locations.css
│   │   ├── login.css
│   │   ├── main.css
│   │   └── vendors.css
│   ├── js/
│   │   ├── auth.js
│   │   ├── index.js
│   │   ├── login.js
│   │   └── vendors.js
│   ├── index.html
│   ├── locations.html
│   ├── login.html
│   └── vendors.html
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── vendorController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── routes/
│   │   ├── admin.js
│   │   └── index.js
│   └── utils/
│       └── jwt.js
├── app.js
├── package.json
└── README.md
```

## Requisitos Previos
- Node.js (v14 o superior)
- npm o pnpm

## Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd smorgasburg-web
```

2. Instalar dependencias:
```bash
pnpm install
```

3. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto:
```env
JWT_SECRET=tu_secreto_jwt
PORT=3000
```

4. Iniciar el servidor:
```bash
pnpm run dev
```

## Uso

### Acceso al Sistema
- **Administrador**:
  - Email: admin@test.com
  - Password: admin123

- **Vendedor**:
  - Email: vendor@test.com
  - Password: vendor123

### Rutas Principales
- `/`: Página principal
- `/locations`: Ubicaciones disponibles
- `/vendors`: Catálogo de vendedores
- `/login`: Inicio de sesión

## Desarrollo

### Scripts Disponibles
```bash
pnpm run dev     # Inicia el servidor en modo desarrollo
pnpm start       # Inicia el servidor en modo producción
```
---
Desarrolladol para el curso de Integracion de Aplicaciones - ISIL.
