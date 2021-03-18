import './App.css';
import React, { useState, useEffect } from 'react';
import Events from './components/Events';
import Users from './components/Users';


const App = () => {
  return (
    <>
      <h1>Eventonica</h1>
      <Users />
      <Events />
    </>
  );
}

export default App;
