import React from "react";
import { aboutImg } from "../../data";
import "./about.css";

function About() {
  return (
    <div>
      <section className="about-us" id='about'>
        <div className="about-us-content">
          <h1 className="about-us-heading">About Us</h1>
          <div className="underline">
            <div className="small-underline"></div>
            <div className="big-underline"></div>
          </div>
          <h3 className="sub-heading">Grand Hotel</h3>
          <p className="about-us-paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            accusantium exercitationem qui quis perspiciatis totam dolores.
            Numquam inventore temporibus recusandae? Eos eaque quia eius culpa
            nulla vitae, cumque enim voluptates!
          </p>
          <button className="about-us-btn">
            Read More
            <i className="fas fa-angle-double-right btn-arrow"></i>
          </button>
        </div>

        <div className="about-us-images">
          {aboutImg.map((image) => {
            const { id, img, className } = image;

            return <img key={id} src={img} className={className} />;
          })}
        </div>
      </section>
    </div>
  );
}

export default About;
