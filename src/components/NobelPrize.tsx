import React, { Component } from 'react';
import Laureate from './Laureate';

class NobelPrize extends Component {
  state = { nobel: [] };

  async componentDidMount() {
    try {
      const response = await fetch('https://api.nobelprize.org/2.1/nobelPrizes');
      const data = await response.json();
      this.setState({ nobel: data.nobelPrizes });
    } catch (error) {
      console.error('Erro ao buscar os prêmios:', error);
    }
  }

  render() {
    const { nobel } = this.state;

    return (
      <div>
        {nobel.map((nobelElement: any, index: number) => (
          <div
            key={ `${nobelElement.categoryFullName.en}-
          ${nobelElement.dateAwarded}-${index}` }
          >
            <h2>
              Categoria:
              {' '}
              {nobelElement.categoryFullName.en}
            </h2>
            <h4>
              Data:
              {' '}
              {nobelElement.dateAwarded}
            </h4>
            {nobelElement.laureates.map((laureate: any) => (
              <Laureate key={ laureate.id } laureate={ laureate } />
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default NobelPrize;
