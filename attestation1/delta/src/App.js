import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header>
        <div className="content-wrapper">
          <Header />
        </div>
      </header>
      <main><div className="content-wrapper"></div></main>
      <footer>
        <div className="content-wrapper">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;
