FROM openjdk:17-oracle

WORKDIR /

COPY . .

RUN javac Main.java

CMD java Main

# docker build -f py.Dockerfile -t py .
# docker run -i -rm py
