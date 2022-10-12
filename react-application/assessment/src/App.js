import React from 'react';
import './App.css';
import About from './Components/About';
import Header from './Components/Header';
import Evolution from './Components/Evolution'
import Videolink from './Components/Videolink';
import Dashboard from './Components/Dashboard';
  
function App() {
    return (
        <>
            <Header/>
            <About/>
            <Evolution/>
            <Videolink/>
            <Dashboard/>
        </>
    )
}
  
export default App