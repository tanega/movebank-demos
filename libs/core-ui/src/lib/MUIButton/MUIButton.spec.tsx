import { render } from '@testing-library/react';

import MUIButton from './MUIButton';

describe('MUIButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MUIButton />);
    expect(baseElement).toBeTruthy();
  });
});
