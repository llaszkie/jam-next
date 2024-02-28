import { render } from '@testing-library/react';
import Home from './home';

describe('Home component', () => {
  it('mounts home component', async () => {
    const { findByText } = render(<Home>
      <div>We are the children</div>
    </Home>);
    expect(await findByText(/Mountain-o-Pedia/)).toBeTruthy();
    expect(await findByText(/We are the children/)).toBeTruthy();
  });
});
