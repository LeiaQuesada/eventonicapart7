import './App.css';
import React, { useState, useEffect } from 'react';
import Events from './components/Events';


const App = () => {
  return (
    <>
      <h1>Eventonica</h1>
      <p>What can we invite you to participate in?</p>
      <Events />
    </>
  );
}

export default App;
