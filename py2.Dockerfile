FROM python:2

WORKDIR /

COPY . .

CMD python3 py2.py

# docker build -f py.Dockerfile -t py .
# docker run -i -rm py
