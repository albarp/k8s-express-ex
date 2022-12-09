FROM node:12.2-alpine
WORKDIR /app
COPY package.json ./
RUN npm i
COPY . .
CMD ["node", "index.js"]
EXPOSE 3000