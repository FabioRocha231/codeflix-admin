FROM node:14.17-slim

WORKDIR /home/node/app

USER node

CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]
