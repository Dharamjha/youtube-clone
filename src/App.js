import React from 'react';
import './App.css';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import Searchpage from './Searchpage';
import Recommendedvideos from './Recommendedvideos';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route 
            path='/Search/:searchTerm' 
            element={
              <div className='app_page'>
                <Sidebar />
                <Searchpage />
              </div>
            }
          />
          <Route 
            path='/' 
            element={
              <div className='app_page'>
                <Sidebar />
                <Recommendedvideos />
              </div>
            } 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
