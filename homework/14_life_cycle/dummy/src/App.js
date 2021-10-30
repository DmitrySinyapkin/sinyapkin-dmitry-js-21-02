import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header name="Пользователи"/>
        </header>
        <main></main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
