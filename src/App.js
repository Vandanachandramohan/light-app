import React, { useState }  from 'react';
import Light from './components/Light.js';
import './App.css'


function App() {
  const[value1,setValue1]=useState('ON');
  const[value2,setValue2]=useState('ON');
  return (
    <div className="SetupContainer">
      <Light isOn={value1} toggle={() => setValue1(value1==='ON'?'OFF':'ON')} />
      <Light isOn={value2} toggle={() => setValue2(value2==='ON'?'OFF':'ON')} />
    </div>
  );
}

export default App;
