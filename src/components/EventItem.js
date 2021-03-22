import React from "react";
import { useHistory } from "react-router-dom";

const EventItem = (props) => {
  const { eventid, title, description } = props;
  let history = useHistory();

  const showEvent = (eventid) => {
    console.log(eventid);
    history.push(`/editEvent/${eventid}`);
  };

  return (
    <div key="eventid">
      <h4>
        <span>
          <h3>Event: {title}</h3>
          <h4>Description: {description}</h4>
          <button onClick={() => showEvent(eventid)}>Edit</button>
        </span>
      </h4>
    </div>
  );
};

export default EventItem;
