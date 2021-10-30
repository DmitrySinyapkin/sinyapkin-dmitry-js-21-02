import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { UserList } from './components/UserList/UserList';
import { ThemeContextConsumer } from './contexts/ThemeContext';

export class App extends React.Component {
  render() {
    return (
      <ThemeContextConsumer>
        {
          (context) => (
            <div className={`App ${context.darkTheme && "App_dark"}`}>
              <div className="body">
                <header>
                  <Header name="Пользователи"/>
                </header>
                <main>
                  <UserList/>
                </main>
              </div>
            </div>  
          )  
        }
      </ThemeContextConsumer>
      
    );
  }
}

export default App;
