import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const paragraph = screen.getByText(/loading/i);
  expect(paragraph).toBeInTheDocument();
});
