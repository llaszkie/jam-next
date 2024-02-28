import { render } from '@testing-library/react';
import Index from './page';

describe('Initial page content', () => {
  it('mounts index page', async () => {
    const { findByText } = render(<Index />);
    expect(await findByText(/Use the search first/)).toBeTruthy();
  });
});
