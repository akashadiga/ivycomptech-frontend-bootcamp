import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [currentSum,setCurrentSum]=useState(0);
  const [currentOutput2,setCurrentOutput2]=useState(0);
  const [clear,setClear]=useState(false);

  useEffect(()=>{
    document.querySelector('#result1').value="";
  }, [])
  
  useEffect(()=>{
    if(clear)
    document.querySelector('#result1').value="";
  })

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum+parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Sub=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum-parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Mul=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum*parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Divi=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let currentNum=document.querySelector('#num').value
    if(currentNum=='')
    return;
    let sum= currentSum/parseInt(currentNum);
    setCurrentSum(sum);
    document.querySelector('#num').value="";
      
  }

  const Pov=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let base=document.querySelector('#base').value
    let power=document.querySelector('#power').value
    if(base==''|| power=='')
    return;
    let output2= Math.pow(parseInt(base), parseInt(power));
    setCurrentOutput2(output2);
    document.querySelector('#base').value="";
    document.querySelector('#power').value="";
      
  }

  const Clear=(e)=>{
    e.preventDefault();
    document.querySelector('form').reset();
    setClear(true);
    setCurrentSum(0);
  }

  return (
    <div className="App">
      <div className="app-title">
        <h1> My React Calculator</h1>
      </div>
      <form>
            <input type="text" id="result1" value={currentSum} placeholder="output screen" readOnly />   
            <input type="text" id="num" placeholder="enter a number" />
            <button onClick={Sub}>-</button>
            <button onClick={Add}>+</button>
            <button onClick={Mul}>*</button>
            <button onClick={Divi}>/</button>
            <button onClick={Clear}>Clear</button>
      </form>
      <form>
            <input type="text" id="result2" value={currentOutput2}  readOnly />
            <input type="text" id="base" placeholder="enter a number" />   
            <input type="text" id="power" placeholder="enter a number" />
            <button onClick={Pov}>power</button>
      </form>
    </div>
  );
}

export default App;