FROM gcc:11

WORKDIR /

COPY . .

RUN gcc c.c

CMD ./a.out

# docker build -f c.Dockerfile  -t IMAGENAME .
# docker run -it -d --name CONTIANERNAME IMAGENAME
