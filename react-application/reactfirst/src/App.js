import logo from './logo.svg';
import './App.css';
import React from 'react';

class Welcome extends React.Component {
    render() {
      return <p id="hi">Hi, I am {this.props.name}. This is my first React application</p>
    }
  }
// function Welcome(props) {
//   return (<p id="hi">Hi, I am {this.props.name}. This is my first React application</p>);
// }
function App() {
  return (
    <div className="App-header">
      <Welcome name="Akash Adiga" />
        <img src={logo} className="App-logo" alt="logo" />      
    </div>
  );
}

export default App;










  {/* 
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
          {/* <Akash /> */}
    
    // import Akash from './Akash';*/}