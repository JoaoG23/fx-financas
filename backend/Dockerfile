FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma generate --schema ./prisma/schema.prisma

EXPOSE 3000

CMD ["npm", "run", "prod"]
