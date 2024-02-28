import { fireEvent, render } from '@testing-library/react';
import Navigation from './navigation';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const expectedMountains = [
  {
    id: 'rysy',
    title: 'Rysy'
  }];

const server = setupServer(
  http.get('http://localhost:3000/mountains', () => {
    return HttpResponse.json(expectedMountains);
  })
);

jest.useFakeTimers();
describe('Navigation widget', () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it('mounts navigation', async () => {
    const { getByLabelText, findByText, queryByText } = render(<Navigation />);
    expect(queryByText(/Rysy/)).toBeFalsy();
    const input = getByLabelText(/Search/);
    fireEvent.change(input, { target: { value: 'rysy' } });
    jest.runAllTimers();
    expect(await findByText(/Rysy/)).toBeTruthy();
  });
});
