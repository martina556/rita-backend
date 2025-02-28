# Usa una imagen oficial de Node.js como base
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia todo el código al contenedor
COPY . .

# Expone el puerto en el que correrá tu servidor
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["npm", "start"]
