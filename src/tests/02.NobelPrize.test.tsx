import { render, screen } from '@testing-library/react';
import { mockData } from './mockData';
import { vi } from 'vitest';
import App from '../App';

describe('2 - Implemente o componente NobelPrize', () => {
  beforeEach(() => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: vi.fn().mockResolvedValue(mockData),
    } as any);

    render(<App />);
  });

  it('O componente NobelPrize renderiza a tag `h2` com a categoria do prêmio', async () => {
    const categories = await screen.findAllByRole('heading', { level: 2 });

    categories.forEach((category, index) => {
      expect(category).toHaveTextContent(mockData.nobelPrizes[index].categoryFullName.en);
    });
  });

  it('O componente NobelPrize renderiza a tag `h4` com a data do prêmio', async () => {
    const dates = await screen.findAllByRole('heading', { level: 4 });

    dates.forEach((date, index) => {
      expect(date).toHaveTextContent(mockData.nobelPrizes[index].dateAwarded);
    });
  });
});
