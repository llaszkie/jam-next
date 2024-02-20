import { render } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

import App from './app';

const server = setupServer(
  http.get('http://localhost:3000/mountains', () => {
    return HttpResponse.json({});
  }),
  http.get('http://localhost:3000/mountains/aconcagua', () => {
    return new Response();
  })
);

describe('App', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Mountain-o-Pedia/)).toBeTruthy();
  });
});
