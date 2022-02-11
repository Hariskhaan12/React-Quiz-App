import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Homepage from './Components/Homepage/Homepage';

function App() {
  return (
    <div >
      <Header/>
      <Homepage title='Welcome to My Quiz Game'/>
    </div>
  )
}

export default App;
