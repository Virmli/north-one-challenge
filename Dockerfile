# Defines the environment for our application

FROM node:16-alpine
RUN mkdir /app

RUN set -ex && \
    adduser node root && \
    chmod g+w /app && \
    apk add --update --no-cache

ENV HOME=/app
WORKDIR /app

COPY package.json package-lock.json /app/
RUN set -ex && \
    npm i && \
    npm ci && \
    npm cache clean --force

COPY ./ /app/

RUN set -ex && \
    chmod -R g=u /app/.config

USER node
EXPOSE 8080
CMD ["npm", "run", "start"]
