import React, { useEffect, useState } from "react";

const ListEvents = () => {
    const [ events, setEvents ]  = useState([]);

  const getEvents = async () => {
    try {
      const response = await fetch("http://localhost:3000/events");
      const jsonData = await response.json();
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
        {events.map(event => {
            <>
        })}
    </>);
};

export default ListEvents;
