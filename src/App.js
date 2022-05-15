import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Homepage } from './components/Homepage/Homepage';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Header } from './components/Header/Header';
import About from './pages/About/About';
import { createContext } from 'react';

export const ThemeContext  = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toogleTheme = () => {
    setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      <Router>
      <div id={theme}>
        <Header />
        <main className='main'>
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path='/about' element={<About />} />
            <Route path="/*" element={<PageNotFound />}/>
          </Routes>
        </main>
      </div>
    </Router>
    </ThemeContext.Provider>
    
  );
}

export default App;
