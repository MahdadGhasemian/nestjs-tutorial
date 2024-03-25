describe('Reservations', () => {
  beforeAll(async () => {
    const user = {
      email: 'sleeprusertest@gmail.com',
      password: 'zuBVRaaGhTemkskfGe3Kku0X41di3WQY',
    };
    await fetch('http://auth:3001', {
      method: 'POST',
      body: JSON.stringify(user),
    });
  });

  test('Create', () => {});
});
