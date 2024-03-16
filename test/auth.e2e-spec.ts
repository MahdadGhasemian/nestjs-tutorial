import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('Authentication System (e2e)', () => {
  let app: INestApplication;
  const random = Math.floor(Math.random() * 99999);

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('handles a signup request', () => {
    const userEmail = `test-${random}@test.com`;
    const userPassword = `${random}`;

    return request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        email: userEmail,
        password: userPassword,
      })
      .expect(201)
      .then((res) => {
        const { id, email } = res.body;
        expect(id).toBeDefined();
        expect(email).toEqual(userEmail);
      });
  });

  it('signup as a new user then get the currently logged in user', async () => {
    const userEmail = `test-${random}@test.com`;
    const userPassword = `${random}`;

    const res = await request(app.getHttpServer())
      .post('/auth/signup')
      .send({
        email: userEmail,
        password: userPassword,
      })
      .expect(201);

    const cookie = res.get('Set-Cookie');

    const { body } = await request(app.getHttpServer())
      .get('/auth/whoami')
      .set('Cookie', cookie)
      .expect(200);

    expect(body.email).toEqual(userEmail);
  });
});
