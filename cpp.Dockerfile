FROM gcc:11

WORKDIR /

COPY . .

RUN g++ cpp.cpp

CMD ./a.out

# docker build -f c.Dockerfile  -t IMAGENAME .
# docker run -it -d --name CONTIANERNAME IMAGENAME
