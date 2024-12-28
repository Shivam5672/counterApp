import React from 'react'
import './App.css';
import Counter from './Components/Counter/Counter';

const App = () => {
  return (
    <div className='app'>
      <h1 className="main-heading">Counter App</h1>
      <Counter />
    </div> 
  )
}

export default App