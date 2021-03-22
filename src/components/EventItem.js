import React from "react";
import { useHistory } from "react-router-dom";

const EventItem = (props) => {
  const { eventid, title, description, onDeleteEvent } = props;
  let history = useHistory();

  const showEvent = (eventid) => {
    console.log(eventid);
    history.push(`/editEvent/${eventid}`);
  };

  function deleteEvent(eventid) {
    fetch(`http://localhost:3001/event/${eventid}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          if (result.success) {
            alert(result.message);
            onDeleteEvent(eventid);
          }
        },
        (error) => {
          alert(error);
        }
      );
  }

  return (
    <div key="eventid">
      <h4>
        <span>
          <h3>Event: {title}</h3>
          <h4>
            Description: {description}, {eventid}
          </h4>
          <button onClick={() => showEvent(eventid)}>Edit</button>
          <button onClick={() => deleteEvent(eventid)}>Delete</button>
        </span>
      </h4>
    </div>
  );
};

export default EventItem;
