
FROM node:20

WORKDIR /

COPY . .

CMD node js.js

# docker build -f py.Dockerfile  -t IMAGENAME .
# docker run -it -d --name CONTAINERNAME IMAGENAME
