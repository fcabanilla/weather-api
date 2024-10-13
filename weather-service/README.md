
# Weather API - RESTful Microservice

## Descripción
Este proyecto consiste en un microservicio RESTful para la obtención y almacenamiento de datos climáticos en tiempo real. La API se construyó utilizando Node.js y MongoDB, siguiendo buenas prácticas de diseño y asegurando una arquitectura escalable y modular.

## Características
- Obtener datos climáticos actuales por ubicación.
- Almacenar registros de clima en una base de datos MongoDB.
- Consultar registros históricos de datos climáticos.
- Obtener pronósticos climáticos a corto plazo.
- Funcionalidad de autenticación con registro e inicio de sesión para usuarios.
- Paginación y manejo de errores robusto.
- Caché para optimización de solicitudes repetitivas.

## Requisitos Previos
- **Node.js** (versión 14+)
- **MongoDB**
- **Docker y Docker Compose** (opcional para contenedores)
- Cuenta de **GitHub** para almacenar y versionar el código

## Estructura del Proyecto
```
weather-service/
├── Dockerfile
├── docker-compose.yml
├── package.json
├── package-lock.json
├── src/
│   ├── app.js
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── weatherController.js
│   ├── services/
│   │   └── weatherService.js
│   ├── adapters/
│   │   └── openWeatherAdapter.js
│   ├── models/
│   │   └── weatherData.js
│   ├── routes/
│   │   └── weatherRoutes.js
│   └── utils/
│       └── cacheManager.js
└── .env
```

## Configuración del Entorno
1. **Clonar el Repositorio**
   ```bash
   git clone https://github.com/fcabanilla/weather-api.git
   cd weather-api
   ```

2. **Instalar Dependencias**
   ```bash
   npm install
   ```

3. **Configurar Variables de Entorno**
   Crea un archivo `.env` con la siguiente información:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/weather_db
   REDIS_HOST=redis
   OPENWEATHER_API_KEY=tu_api_key
   JWT_SECRET=tu_secreto
   ```

4. **Correr la Aplicación**
   Puedes correr la aplicación de dos formas: utilizando Docker o ejecutando localmente.

   - **Usando Docker Compose**:
     ```bash
     docker-compose up --build
     ```

   - **Ejecutando localmente**:
     ```bash
     npm start
     ```

## Endpoints Principales
- **GET /api/weather**: Obtener datos climáticos para una ubicación específica.
- **POST /api/weather**: Crear un nuevo registro de datos climáticos.
- **GET /api/weather/{id}**: Obtener un registro específico de datos climáticos por ID (UUID).
- **PUT /api/weather/{id}**: Actualizar un registro de datos climáticos.
- **DELETE /api/weather/{id}**: Eliminar un registro de datos climáticos.
- **GET /api/weather/history**: Obtener registros históricos con paginación.
- **POST /auth/register**: Registrar un nuevo usuario.
- **POST /auth/login**: Iniciar sesión para obtener un token JWT.

## Seguridad y Autenticación
- Los endpoints protegidos requieren un **token JWT** que se obtiene al iniciar sesión con `/auth/login`.
- Se utiliza **rate limiting** para proteger los endpoints de ataques de fuerza bruta.

## Pruebas y Monitoreo
- Implementar pruebas de integración utilizando frameworks como **Jest**.
- Endpoint de salud **GET /ping**: Utilizado para verificar que el servicio esté en línea y funcionando.

## Mejora Continua
- **Escalabilidad**: Implementar un balanceador de carga en caso de alta demanda.
- **Monitoreo**: Integrar herramientas como **Prometheus** y **Grafana** para el monitoreo de métricas y estado del servicio.
- **Manejo de Errores**: Mejorar la consistencia en los mensajes de error para facilitar la depuración.

## Contribución
Las contribuciones son bienvenidas. Si encuentras algún error o tienes sugerencias de mejora, por favor abre un **issue** o envía un **pull request** al repositorio.

## Licencia
Este proyecto está bajo la licencia **MIT**.
