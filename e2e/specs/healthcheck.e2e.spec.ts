import tcpp from 'tcp-ping';

describe('Health', () => {
  test('Reservations', async () => {
    const response = await fetch('http://reservations:3000');
    expect(response.ok).toBeTruthy();
  });

  test('Auth', async () => {
    const response = await fetch('http://auth:3001');
    expect(response.ok).toBeTruthy();
  });

  test('Payments', (done) => {
    tcpp.probe('payments', 3004, function (err, available) {
      if (!available) {
        fail();
      }

      done();
    });
  });

  test('Notifications', (done) => {
    tcpp.probe('notifications', 3006, function (err, available) {
      if (!available) {
        fail();
      }

      done();
    });
  });
});
