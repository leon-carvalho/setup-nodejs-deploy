FROM node:16-slim as BUILDER 
LABEL maintainer="<%= pkg.author %>"


WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./ 
# The command aboce copy the package.json and package.lock.json files to the app directory
RUN npm install

COPY src ./src

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 3000

CMD [ "npm", "start" ]