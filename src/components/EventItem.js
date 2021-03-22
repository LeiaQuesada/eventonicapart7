import React, { useState } from "react";

const EventItem = (props) => {
  const { eventid, title, description } = props;

  const showEvents = (eventid) => {
    console.log(eventid);
    // TODO: load edit screen for this events
  };

  return (
    <div key="eventid">
      <h4>
        <span onClick={() => showEvents(eventid)}>
          <h3>Event: {title}</h3> <h2>Description: {description}</h2>
        </span>
      </h4>
    </div>
  );
};

export default EventItem;
