import React, { useContext, useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { UserList } from './forms/UserList/UserList';
import { ThemeContext } from './contexts/ThemeContext';
import { HashRouter, Routes, Route } from 'react-router-dom';
import UserPage from './forms/UserPage/UserPage';
import { RegForm } from './forms/RegForm/RegForm';

const App = () => {
  const themeContext = useContext(ThemeContext);
  const [pageType, setPageType] = useState('users');

  const handleMenuClick = (event) => {
    setPageType(event.key);
  }

  return (
      <HashRouter>
        <div className={`App ${themeContext.darkTheme && "App_dark"}`}>
          <div className="body">
            <header>
              <Header onClick={handleMenuClick} name={(pageType === 'users') ? "Пользователи" : "Регистрация"}/>
            </header>
            <main>
              <Routes>
                <Route exact path={'/'} element={<UserList/>}/>
                <Route path={'/:id'} element={<UserPage/>}/>
                <Route path={'/create'} element={<RegForm/>}/>
              </Routes>
            </main>
          </div>
        </div>
      </HashRouter>    
    );
  }

export default App;
