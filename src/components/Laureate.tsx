import React, { Component } from 'react';

export type LaureaProps = {
  laureate: any;
};

class Laureate extends Component<LaureaProps> {
  render() {
    const { laureate } = this.props;
    const name = laureate.knownName ? laureate.knownName.en : laureate.orgName.en;

    return (
      <div>
        <h3>{name}</h3>
        <p>{laureate.motivation.en}</p>
      </div>
    );
  }
}

export default Laureate;
