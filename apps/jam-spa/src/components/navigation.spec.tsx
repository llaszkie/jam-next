import { fireEvent, render, screen } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import Navigation from './navigation';
import { MemoryRouter } from 'react-router-dom';

const server = setupServer(
  http.get('http://localhost:3000/mountains?id=aconcagua', (info) => {
    return HttpResponse.json([
      {
        title: 'Aconcagua',
        path: '/mountains/aconcagua',
        id: 'aconcagua'
      }
    ]);
  })
);

describe('Navigation', () => {
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
    const { baseElement } = render(<Navigation />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a mountain list', async () => {
    const { findByText } = render(<Navigation />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>
    });
    const input = screen.getByLabelText(/Search/);
    fireEvent.change(input, { target: { value: 'aconcagua' } });
    expect(await findByText(/Aconcagua/)).toBeTruthy();
  });
});
