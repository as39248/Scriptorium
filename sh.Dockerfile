FROM bash:4

WORKDIR /

COPY . .

CMD sh.sh

# docker build -f py.Dockerfile -t py .
# docker run -i -rm py
