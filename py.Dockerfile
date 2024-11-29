FROM python:3

WORKDIR /

COPY . .

CMD python3 py.py

# docker build -f py.Dockerfile -t py .
# docker run -i -rm py
