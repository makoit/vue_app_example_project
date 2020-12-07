# base image
FROM node:lts-alpine

# set working directory
WORKDIR /frontend_app

# install and cache app dependencies
COPY package.json /frontend_app/package.json
RUN npm install
RUN npm install @vue/cli@4.5.4 -g

# copy project files and folders to the current working directory (i.e. 'frontend_app' folder)
COPY . .

# start app
EXPOSE 8080

# run fronend with integrated dev server
CMD ["npm", "run", "serve"]