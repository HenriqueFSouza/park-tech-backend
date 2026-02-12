FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

RUN npx prisma migrate deploy && npx prisma generate

EXPOSE 3333

CMD ["npm", "start"]