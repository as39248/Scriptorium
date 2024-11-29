FROM mcr.microsoft.com/dotnet/sdk:9.0

WORKDIR /

COPY . .

RUN csc cs.cs

CMD ./a.out

# docker build -f c.Dockerfile  -t IMAGENAME .
# docker run -it -d --name CONTIANERNAME IMAGENAME
