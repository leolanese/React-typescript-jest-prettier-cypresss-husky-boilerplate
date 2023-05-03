import React from 'react';
import { render, screen } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import initialComponentProps from "../../../../src/components/Link1";
import Link1 from "../../../../src/components/Link1";

// Mock the useLocation hook
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('Link1', () => {
  it('should render with correct props and state', () => {
    const mockLocation = {
      pathname: '/1',
      search: '',
      state: { message: 'Hello World' },
      hash: '',
    };

    // Mock the return value of useLocation
    (useLocation as jest.Mock).mockReturnValue(mockLocation);

    render(<Link1 {...initialComponentProps} />);

    // Check that the component is rendered with correct props and state
    expect(screen.getByText('Link1: Message prop from Lorem and Ipsum! Message: Hello World')).toBeInTheDocument();
  });
});
