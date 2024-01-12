import { Component } from 'react';
import './App.css';

import Header from './components/Header';
import NobelPrize from './components/NobelPrize';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NobelPrize />
      </div>
    );
  }
}

export default App;
