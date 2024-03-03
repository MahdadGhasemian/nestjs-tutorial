# nestjs-tutorial

# Install cli

```bash
npm i -g @nestjs/cli
```

# Create app

```bash
nest new ordering-app
cd ordering-app
```

# Generate other apps

```bash
# clear basic ordering-app definations
nest generate app orders
nest generate app billing
nest generate app auth
```

# Run application

```bash
npm run start:dev
npm run start:dev billing
```

# Generate common libraries

```bash
nest generate library common
```

# Databse library

Create databse folder inside the libs/common/src

```bash
npm i --save mongoose
npm i --save @nestjs/mongoose
npm i --save @nestjs/config
```

Validation schema lib

```bash
npm i --save joi
```

# Run docker

```bash
docker-compose up --build -V
docker-compose up -d
```

# Validator

```bash
npm i --save class-validator
npm i --save class-transformer
```

# Microservices

```bash
npm i --save @nestjs/microservices
npm i --save amqplib amqp-connection-manager
```
