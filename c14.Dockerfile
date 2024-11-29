FROM gcc:14

WORKDIR /

COPY . .

RUN gcc c14.c

CMD ./a.out

# docker build -f c.Dockerfile  -t IMAGENAME .
# docker run -it -d --name CONTIANERNAME IMAGENAME
