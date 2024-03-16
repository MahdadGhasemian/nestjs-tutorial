# Car Value

![Defination](./.images/carvalue-defination.png)

![APIs](./.images/carvalue-apis.png)

![Module](./.images/carvalue-module.png)

![DB](./.images/carvalue-db.png)

![DB Repository API](./.images/carvalue-db-repository.png)

![USER](./.images/carvalue-user.png)

![USER Auth](./.images/carvalue-user-auth.png)

# Relationships

## One To One

![One To One](./.images/carvalue-relationships-onetoone.png)

## One To Many <> Many To One

![One To Many](./.images/carvalue-relationships-onetomany.png)

## Many To Many

![Many To Many](./.images/carvalue-relationships-manytomany.png)

## User Relationship

![User Relationship 1](./.images/carvalue-user-relationship.png)
![User Relationship 2](./.images/carvalue-user-relationship2.png)

```bash
nest generate module users
nest generate module reports

nest generate controller users
nest generate controller reports

nest generate service users
nest generate service reports
```

```bash
npm install --save @nestjs/typeorm typeorm sqlite3
```
