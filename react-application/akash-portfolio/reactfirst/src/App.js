import logo from './logo.svg';
import './App.css';
import Contact from './components/contact';
import Indexmain from './components/indexmain';
import React from "react";
import Mywork from './components/mywork';
import Skills from './components/Skills';

function App() {
  return (
    <main>
      <Indexmain/>
      <Mywork/>
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
