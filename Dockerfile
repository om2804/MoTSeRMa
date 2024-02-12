FROM node:4.4.5

WORKDIR /usr/src/app
COPY package*.json ./
ENV PORT /dev/ttyUSB0

RUN npm cache clear --force && npm install

COPY . .

EXPOSE 502

ENTRYPOINT ["node", "MoTSeRMa.js"]