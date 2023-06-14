import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Home from './home';

const server = setupServer(
  rest.get('http://localhost:3000/mountains', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: 'Aconcagua',
          path: '/mountains/aconcagua',
          id: 'aconcagua',
        },
      ])
    );
  })
);

describe('Home component', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('should have a mountain list', async () => {
    const { findByText } = render(await Home({ children: '' }));
    expect(await findByText(/Aconcagua/)).toBeTruthy();
  });
});
