FROM node:18.18.0

#RUN npm install -g npm@9.8.1

WORKDIR "/app"

COPY package*.json ./

#RUN npm cache clean --force

RUN npm install

COPY . .

RUN chown -R node /app/node_modules

USER node

EXPOSE 3001

##For Development
CMD ["npm", "start"]

##For Production
#FROM nginx
#COPY --from=builder /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
#