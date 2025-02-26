FROM node:22

WORKDIR /app

COPY /apps/web/package*.json ./

RUN npm install

COPY /apps/web/ ./

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]

