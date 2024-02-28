import { http, HttpResponse } from 'msw';
import { fetchMountains } from './fetchMountains';
import { setupServer } from 'msw/node';

const expectedMountains = [
  { id: 'rysy', title: 'Rysy' },
  { id: 'swinica', title: 'Świnica' }
];

const server = setupServer(
  http.get('http://localhost:3000/mountains', ({ request }) => {
    const url = new URL(request.url);
    const mountainId = url.searchParams.get('id');
    if (!mountainId) {
      return HttpResponse.json(expectedMountains);
    }

    const found = expectedMountains.find(m => m.id === mountainId);
    if (found)
      return HttpResponse.json([found]);
    else
      return HttpResponse.json([], { status: 404 });
  })
);
describe('Fetch mountains', () => {

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('handles correct multi result', async () => {
    // when
    const result = await fetchMountains('*');
    // then
    expect(result).toEqual(expectedMountains);
  });

  it('handles correct single result', async () => {
    // when
    const result = await fetchMountains('rysy');
    // then
    expect(result).toEqual([expectedMountains.find(m => m.id === 'rysy')]);
  });

  it('handles no data result', async () => {
    // when
    try {
      await fetchMountains('pagorek');
      fail();
    } catch (error) {
      expect(error.message).toEqual('Failed to fetch mountains data');
    }
  });
});
