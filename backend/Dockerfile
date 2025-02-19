FROM node

WORKDIR /dist

COPY package*.json .

RUN npm install

COPY . .

# RUN npx prisma db push --schema ./prisma/schema.prisma
RUN npx prisma generate --schema ./prisma/schema.prisma

CMD npm run prod