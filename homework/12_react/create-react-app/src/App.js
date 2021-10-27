import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from "./components/Header/Header";
import { Sidebar } from './components/Sidebar/Sidebar';
import { MainPage } from './pages/MainPage/MainPage';

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
        <main>
          <MainPage />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
