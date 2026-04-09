import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders home route content', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('link', { name: /about me/i })).toBeInTheDocument();
});

test('unknown routes redirect to home', () => {
  render(
    <MemoryRouter initialEntries={['/not-a-real-route']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('link', { name: /about me/i })).toBeInTheDocument();
});

test('about route renders profile content', () => {
  render(
    <MemoryRouter initialEntries={['/aboutme/']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByRole('columnheader', { name: /technology/i })).toBeInTheDocument();
});
