#1. Imagem base
FROM node:20-alpine

#2. Diretório de trabalho dentro do container
WORKDIR /app

#3. Copia os arquivos de dependências
COPY package*.json ./

#4. Instala as dependências do projeto
RUN npm install

#5. Copia o restante dos arquivos do projeto
COPY . .

#6. Expõe a porta que o aplicativo irá rodar
EXPOSE 3000

#7. Comando para iniciar o aplicativo
CMD ["npm", "start"]