import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text in App', () => {
  render(<App />);
  const text = screen.getByText(/visiting/i);
  expect(text).toBeInTheDocument();
});
