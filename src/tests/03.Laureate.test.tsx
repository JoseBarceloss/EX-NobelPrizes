import { render, screen } from '@testing-library/react';
import { mockData } from './mockData';
import { vi } from 'vitest';
import App from '../App';

describe('3 - Implemente o componente Laureate', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    } as any);

    render(<App />);
  });

  it('O componente Laureate renderiza a tag `h3` com o nome do laureado', async () => {
    const laureates = await screen.findAllByRole('heading', { level: 3 });

    expect(laureates[0]).toHaveTextContent(mockData.nobelPrizes[0].laureates[0].knownName.en);
  });

  it('O componente Laureate renderiza a tag `p` com a motivação do prêmio', async () => {
    const motivation = await screen.findByText(mockData.nobelPrizes[0].laureates[0].motivation.en);

    expect(motivation).toBeInTheDocument();
  });
});
