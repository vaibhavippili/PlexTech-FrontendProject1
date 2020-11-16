import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pizza from './PizzaFunction'
import ClassComponent from './ClassComponent'
import { render } from 'react-dom';

function App(){
  return(
    <div className="App">
      <h1> Hello User! </h1>
      <ClassComponent />
    </div>
  )
}

export default App;
