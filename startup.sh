# Create environment variables
export BCRYPT_SALT_ROUNDS=10
export JWT_SECRET="sfrb098j24t"
export JWT_EXPIRES_IN="1h"
export JWT_SECRET_REFRESH="qpegnqepg9qp"
export JWT_EXPIRES_IN_REFRESH="7d"

# install needed dependencies
npm install

# migrate prisma
npx prisma generate
npx prisma migrate dev --name init

# docker builds
docker build -f py.Dockerfile  -t py .
docker build -f c.Dockerfile  -t c .
docker build -f cpp.Dockerfile  -t cpp .
docker build -f java.Dockerfile  -t java .
docker build -f js.Dockerfile  -t js .
docker build -f py2.Dockerfile  -t py2 .
docker build -f cs.Dockerfile  -t cs .
docker build -f sh.Dockerfile  -t sh .
docker build -f c14.Dockerfile  -t c14 .
docker build -f c13.Dockerfile  -t c13 .