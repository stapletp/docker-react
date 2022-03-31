import { render, screen } from '@testing-library/react';
import App from './App';

test('displays test on screen', () => {
  render(<App />);
  const stringElement = screen.getByText('Welcome, Patrick.');
  expect(stringElement).toBeInTheDocument();
});

test('displays test on screen', () => {
  render(<App />);
  const stringElement = screen.getByText('Welcome, Patrick.');
  expect(stringElement).toBeInTheDocument();
});