import { render, screen } from '@testing-library/react';
import App from '../App';
import Header from '../components/Header';
import { vi } from 'vitest';
import { mockData } from './mockData';

describe('1 - Implemente o componente `<Header />`', () => {
  it('Será verificado se o componente possui o logo do prêmio nobel', () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    } as any);

    render(<App />);
    const logo = screen.getByAltText('Nobel Logo');

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', "/src/assets/nobel_logo.png")
  });

  it('Será verificado se o Header é um componente de classe', () => {
    const header = <Header />;
    expect(header.type.toString()).toMatch(/class \w+ extends \w+/);
  });
});
