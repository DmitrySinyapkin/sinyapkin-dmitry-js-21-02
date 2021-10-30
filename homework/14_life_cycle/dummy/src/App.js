import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { UserList } from './components/UserList/UserList';

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header name="Пользователи"/>
        </header>
        <main>
          <UserList/>
        </main>
      </div>
    );
  }
}

export default App;
