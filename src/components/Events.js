import React, { useState, useEffect } from "react";
import EventItem from "./EventItem";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then((res) => res.json())
      .then(
        (result) => {
          setEvents(result);
        },
        (error) => {
          alert(error);
        }
      );
  }, []);

  const removeEvent = (eventid) => {
    let newEvents = [];
    for (let i = 0; i < events.length; i++) {
      if (events[i].eventid !== eventid) {
        newEvents.push(events[i]);
      }
    }
    setEvents(newEvents);
  };

  return (
    <>
      <h2>Events</h2>

      {events.map((row) => {
        return (
          <EventItem
            key={row.eventid}
            eventid={row.eventid}
            title={row.title}
            description={row.description}
            onDeleteEvent={removeEvent}
          />
        );
      })}
    </>
  );
};

export default Events;
