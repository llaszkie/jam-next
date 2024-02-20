import { render } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import Home from './home';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  http.get('http://localhost:3000/mountains', (info) => {
    return HttpResponse.json([
      {
        title: 'Aconcagua',
        path: '/mountains/aconcagua',
        id: 'aconcagua'
      }
    ]);
  })
);

describe('Home', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a mountain list', async () => {
    const { findByText } = render(<Home />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>
    });
    expect(await findByText(/Aconcagua/)).toBeTruthy();
  });
});
