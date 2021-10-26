import React from 'react';
import './App.css';
import { Header } from "./components/Header/Header";
import { Sidebar } from './components/Sidebar/Sidebar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <aside>
          <Sidebar />
        </aside>
        <main></main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
