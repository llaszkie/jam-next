import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { render } from '@testing-library/react';
import Mountain from './page';

const expectedMountain =
  {
    id: 'rysy',
    title: 'Rysy',
    description: 'Rysy is a mountain in the crest of the High Tatras, lying on the border between Poland and Slovakia.',
    height: '2,501 m'
  };

const server = setupServer(
  http.get('http://localhost:3000/mountains/rysy', () => {
    return HttpResponse.json(expectedMountain);
  })
);

describe('Mountain   component', () => {

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('mounts mountain page', async () => {
    const { findByText } = render(await Mountain({ params: { mountainId: 'rysy' } }));
    expect(
      await findByText(/Rysy is a mountain in the crest of the High Tatras/)
    ).toBeTruthy();
    expect(await findByText(/2,501 m/)).toBeTruthy();
  });
});
