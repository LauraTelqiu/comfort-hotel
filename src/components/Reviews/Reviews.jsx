import React from "react";
import "./reviews.css";
import { reviews } from "../../data";

function Reviews() {
  return (
    <section className="customers">
      <div className="common-header">
        <h1 className="common-heading">Our Customers</h1>
        <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div>
      </div>

      <p className="customers-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
        aspernatur sint! Esse aliquam explicabo aperiam eos, ipsum nam
        consectetur ipsa!
      </p>

      <div className="customers-card-wrapper">
        {reviews.map((review) => {
          const { id, name, img, text, desc } = review;

          return (
            <div key={id} className="customer-card">
              <div className="customer-image-wrapper">
                <img src={img} className="customer-image" />
              </div>
              <div className="customer-info">
                <h3 className="customer-fullname">{name}</h3>
                <p className="customer-paragraph-1">{text}</p>
                <p className="customer-paragraph-2">{desc} </p>
              </div>
            </div>
          )
        })}

      </div>
    </section>
  );
}

export default Reviews;
