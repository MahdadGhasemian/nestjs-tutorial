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
