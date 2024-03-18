# Car Value

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
