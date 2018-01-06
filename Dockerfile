FROM node:latest

# update apt-get
RUN apt-get update
RUN apt-get install apt-transport-https

# install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update
RUN apt-get install -y yarn

WORKDIR /usr/src
RUN yarn
EXPOSE 8080
ENTRYPOINT ["yarn", "start"]
