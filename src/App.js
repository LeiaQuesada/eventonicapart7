import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [ title, setTitle ] = useState('');
  
  useEffect(async () => {
    try {
      let res = await fetch('http://localhost:3001/event/1');
      let event = await res.json();
      setTitle(event.title);
    } catch (e) {
      //TODO: handle error
    }
  }, []);

  return (
    <>
      <div>
        <label>Title 
          <form>
            <input
              value={title}
              type="text"
            >
            </input>
          </form>
        </label>
       
      </div>
    </>
  );
}

export default App;
