import React, { useState, useEffect } from 'react';

const Events = () => {
  const [ title, setTitle ] = useState('');
  const [ date, setDate ] = useState('');
  const [ time, setTime ] = useState('');
  const [ description, setDescript ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ street, setStreet ] = useState('');
  const [ city, setCity ] = useState('');
  const [ state, setState ] = useState('');
  const [ zipcode, setZipcode ] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      try {
        let res = await fetch('http://localhost:3001/event/1');
        let event = await res.json();
        setTitle(event.title);
        setDate(event.date.slice(0, 10));
        setTime(event.eventtime);
        setDescript(event.description);
        setCategory(event.category);
        setStreet(event.street);
        setCity(event.city);
        setState(event.state);
        setZipcode(event.zipcode);
      } catch (e) {
        //TODO: handle error
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div>
        <form>
          <label>Title 
            <input
              value={title}
              type="text"
              onChange={(e)=> {
                e.preventDefault();
                setTitle(e.target.value);
              }}
            >
            </input>
          </label>
          <br/>
          <label>Date 
            <input
              value={date}
              type="date"
              onChange={(e)=> {
                e.preventDefault();
                setDate(e.target.value);
              }}
            >
            </input>
          </label>
          <label>Time 
            <input
              value={time}
              type="time"
              onChange={(e)=> {
                e.preventDefault();
                setTime(e.target.value);
              }}
            >
            </input>
          </label>
          <br/>
          <label>Description 
            <input
              value={description}
              type="textArea"
              onChange={(e)=> {
                e.preventDefault();
                setDescript(e.target.value);
              }}
            >
            </input>
          </label>
          <br/>
          <label>Category 
            <input
              value={category}
              type="text"
              onChange={(e)=> {
                e.preventDefault();
                setCategory(e.target.value);
              }}
            >
            </input>
          </label>
          <br/>
          <label>Street 
            <input
              value={street}
              type="text"
              onChange={(e)=> {
                e.preventDefault();
                setStreet(e.target.value);
              }}
            >
            </input>
          </label>
          <br/>
          <label>City 
            <input
              value={city}
              type="text"
              onChange={(e)=> {
                e.preventDefault();
                setCity(e.target.value);
              }}
            >
            </input>
          </label>
          <br/>
          <label>State 
            <input
              value={state}
              type="text"
              onChange={(e)=> {
                e.preventDefault();
                setState(e.target.value);
              }}
            >
            </input>
          </label>
          <br/>
          <label>Zipcode 
            <input
              value={zipcode}
              type="text"
              onChange={(e)=> {
                e.preventDefault();
                setZipcode(e.target.value);
              }}
            >
            </input>
          </label>
          <br/>
        </form>
      </div>
    </>
  );
}

export default Events;
