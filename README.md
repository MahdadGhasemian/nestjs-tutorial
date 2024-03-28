# Init

```bash
nest new sleepr
nest generate library common

pnpm i --save @nestjs/mongoose mongoose
pnpm i --save @nestjs/config

nest generate module database -p common
nest generate module config -p common

pnpm start:dev

pnpm i --save joi

nest generate app reservations
# delete sleepr app

nest generate resource reservations
# reservations
# REST API

# Move all files inside app/reservations/src/reservations/* to app/reservations/src and delete reservations folder
# create reservations.repository.ts file inside the src folder

pnpm i --save class-validator class-transformer
pnpm i --save nestjs-pino pino-http
pnpm i --save pino-pretty

nest generate module logger
# common
```

# Docker

```bash
docker-compose up
```

# Auth

```bash
nest generate app auth
nest generate module users
# auth
nest generate controller users
# auth
nest generate service users
# auth

pnpm i --save @nestjs/passport passport passport-local
pnpm i --save-dev @types/passport-local
pnpm i --save @nestjs/jwt passport-jwt
pnpm i --save-dev @types/passport-jwt

pnpm i --save bcryptjs express
pnpm i --save-dev @types/bcryptjs

pnpm i --save cookie-parser
pnpm i --save-dev @types/cookie-parser

pnpm i --save @nestjs/microservices
```

# Payments

```bash
nest generate app payments
pnpm i --save stripe
```

# Notifications

email: sleepr85@gmail.com
strip link: https://dashboard.stripe.com/test/payments
google console: https://console.cloud.google.com/

```bash
nest generate app notifications
pnpm i --save nodemailer
pnpm i --save-dev @types/nodemailer
```

# Deploy and Production (Locally)

```bash
cd apps/reservations
docker build -t reservations -f . ../../
docker tag reservations mahdad1988/sleepr-reservations
docker push mahdad1988/sleepr-reservations

cd apps/payments
docker build -t payments -f . ../../
docker tag payments mahdad1988/sleepr-payments
docker push mahdad1988/sleepr-payments

cd apps/notifications
docker build -t notifications -f . ../../
docker tag notifications mahdad1988/sleepr-notifications
docker push mahdad1988/sleepr-notifications

cd apps/auth
docker build -t auth -f . ../../
docker tag auth mahdad1988/sleepr-auth
docker push mahdad1988/sleepr-auth

# fixed docker file
# move package.json to every apps which is relative to it

mkdir k8s
cd k8s
helm create sleepr
kubectl create deployment reservations --image=reservations --dry-run=client -o yaml > deployment.yaml
# create reservations folder under templates and move the deployemnt which was generated into the templates/reservations
cd sleepr
helm install sleepr .
helm upgrade sleepr .
helm upgrade sleepr . --recreate-pods

kubectl create secret generic mongodb --from-literal=connectionString=YOUR_VALUE
kubectl create secret generic googleoauthclientid --from-literal=clientId=YOUR_VALUE
kubectl create secret generic googleoauthclientsecret --from-literal=clientSecret=YOUR_VALUE
kubectl create secret generic googleoauthrefreshtoken --from-literal=refreshToken=YOUR_VALUE
kubectl create secret generic jwt --from-literal=jwtSecret=YOUR_VALUE
kubectl create secret generic stripe --from-literal=secretKey=YOUR_VALUE

kubectl get secrets

kubectl get pods
kubectl get svc

kubectl rollout restart deployment auth
kubectl rollout restart deployment reservations

```

# E2E Test

```bash
mkdir e2e && cd e2e && pnpm init
pnpm i --save-dev jest ts-jest typescript @types/jest
pnpm i --save-dev tcp-ping ts-jest ts-node @types/node @types/tcp-ping

docker-compose up e2e
docker container logs e2e_reservations_1
docker-compose up --build e2e

pnpm test:e2e
```

# Typrorm

```bash
pnpm i --save @nestjs/typeorm typeorm mysql2

```

# RabbitMQ

```bash
pnpm i --save amqplib amqp-connection-manager
```

# GRPC

```bash
pnpm i --save @grpc/grpc-js @grpc/proto-loader ts-proto

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/auth.proto
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/payments.proto
protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/notifications.proto
```
