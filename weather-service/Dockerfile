# Imagen base de Node.js
FROM node:18-alpine

# Definir el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos package.json y package-lock.json al contenedor
COPY package.json package-lock.json ./

# Instalar las dependencias
RUN npm install

# Copiar todo el código fuente al contenedor
COPY . .

# Puerto expuesto por la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

# Nota: Esta configuración asume que el script "start" en package.json inicia la aplicación.
