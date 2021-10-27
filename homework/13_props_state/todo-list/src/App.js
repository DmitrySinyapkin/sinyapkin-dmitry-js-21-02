import React from 'react';
import './App.css';
import { EnterBlock } from './components/enterBlock/EnterBlock';
import { Footer } from './components/footer/Footer';
import {Header} from './components/header/Header';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header name="ToDo list" />
        </header>
        <div className="enter-block">
          <EnterBlock />
        </div>
        <main></main>
        <footer>
          <Footer copyright="2021" />
        </footer>
      </div>
    );
  }
}

export default App;
