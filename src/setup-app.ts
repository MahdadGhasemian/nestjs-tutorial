import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

export const setupApp = (app: any) => {
  app.use(
    session({
      secret: 'my-secret',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
};
