FROM node:19.5.0

COPY . /src
WORKDIR /src

RUN npm ci
RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "start" ]
