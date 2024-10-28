FROM node:23-alpine3.19
WORKDIR /ecommarce-shop
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]