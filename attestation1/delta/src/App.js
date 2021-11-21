import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthForm from './forms/AuthForm/AuthForm';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header>
          <div className="content-wrapper">
            <Header />
          </div>
        </header>
        <main>
          <div className="content-wrapper">
            <Routes>
              <Route path={'/auth'} element={<AuthForm />} />
            </Routes>
          </div>
        </main>
        <footer>
          <div className="content-wrapper">
            <Footer />
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}

export default App;
