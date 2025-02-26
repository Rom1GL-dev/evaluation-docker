FROM node:22

WORKDIR /app

COPY /apps/api/package*.json ./

RUN npm install --production

COPY /apps/api/ .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
