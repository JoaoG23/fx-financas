FROM node:21-alpine AS build-stage

WORKDIR /app

# Copia apenas os arquivos necessários para instalar as dependências primeiro
COPY package*.json ./
RUN npm install

# Copia o restante do código e gera a build
COPY . .
RUN npm run build

# Etapa 2: Servir os arquivos com Nginx
FROM nginx AS production-stage

# Copia os arquivos gerados na build para o Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copia o arquivo de configuração personalizado do Nginx (se existir)
COPY ./nginx/nginx.config /etc/nginx/conf.d/default.conf


