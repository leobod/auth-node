FROM node:14

# node环境变量
ENV NODE_ENV production

COPY package.json /app/auth/package.json
COPY ./static /app/auth/static
COPY ./dist /app/auth/dist

WORKDIR /app/auth

RUN ["npm", "install", "--production"]

EXPOSE 7788

ENTRYPOINT ["node", "dist/src/server.js"]
