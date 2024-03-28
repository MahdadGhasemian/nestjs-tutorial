function generateStrongPassword(length: number) {
  const charset =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

function getHeaders(jwt?: string) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  if (jwt) headers.append('Authentication', jwt);

  return headers;
}

describe('Reservations', () => {
  let jwt: string;

  beforeAll(async () => {
    const random = +Math.floor(Math.random() * 99999);
    const email = `user${random}@example.com`;
    const password = generateStrongPassword(16);

    const userRow = JSON.stringify({
      email,
      password,
    });

    await fetch('http://auth:3001/users', {
      method: 'POST',
      headers: getHeaders(),
      body: userRow,
      redirect: 'follow',
    });

    const response = await fetch('http://auth:3001/auth/login', {
      method: 'POST',
      headers: getHeaders(),
      body: userRow,
      redirect: 'follow',
    });
    jwt = await response.text();
  });

  test('Create & Get', async () => {
    const createdReservation = await createReservation(jwt);
    const responseGet = await fetch(
      `http://reservations:3000/reservations/${createdReservation._id}`,
      {
        method: 'GET',
        headers: getHeaders(jwt),
        redirect: 'follow',
      },
    );

    const reservation = await responseGet.json();
    expect(createdReservation).toEqual(reservation);
  });

  const createReservation = async (jwt: string) => {
    const amount = +Math.floor(Math.random() * 100);

    const repositoryRow = JSON.stringify({
      startDate: new Date(),
      endDate: new Date(),
      charge: {
        amount,
        card: {
          cvc: '413',
          expMonth: 12,
          expYear: 2034,
          number: '4242 4242 4242 4242',
        },
      },
    });

    const responseCreate = await fetch(
      'http://reservations:3000/reservations',
      {
        method: 'POST',
        headers: getHeaders(jwt),
        body: repositoryRow,
        redirect: 'follow',
      },
    );
    expect(responseCreate.ok).toBeTruthy();
    return responseCreate.json();
  };
});
