import React from "react";
import './rooms.css'
import { rooms } from "../../data";


function Rooms() {
  return (
    <section className="rooms">
      <div className="common-header">
        <h1 className="common-heading">Rooms In Royal Hotel</h1>
        <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div>
      </div>

      <div className="rooms-cards-wrapper">
        {rooms.map((room) => {
          const { id, img, title, text, price } = room;
          return (
            <div key={id} className="room-card">
              <img src={img} className="room-img" />
              <div className="room-card-content">
                <h4 className="room-card-heading">{title}</h4>
                <p className="room-card-paragraph">{text}</p>
                <p className="room-price">${price}</p>
                <button className="room-card-btn">
                  Book Now
                  <i className="fas fa-angle-double-right btn-arrow"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="rooms-btn-wrapper">
        <button className="rooms-btn">Check All Rooms</button>
      </div>
    </section>
  );
}

export default Rooms;
