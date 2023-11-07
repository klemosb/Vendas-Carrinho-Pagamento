FROM node:14

# Diretório de trabalho na imagem
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
