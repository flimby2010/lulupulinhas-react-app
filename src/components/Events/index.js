import React from "react";
import "./data";
import "./events.css";

const Events = ({ heading, data }) => {
  return (
    <div className="EventsContainer">
      <div className="EventsHeading">{heading}</div>
      <div className="EventsWrapper">
        {data.map((event, index) => {
          return (
            <div className="EventsCard" key={index}>
              <div className="EventsImg" src={event.img} alt={event.alt} />
              <div className="EventsInfo">
                <div className="EventsTitle">{event.name}</div>
                <div className="EventsDesc">{event.desc}</div>
                <div className="EventsPrice">{event.price}</div>
                <div className="EventsButton">{event.button}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
