import { useState } from "react";
import "./reviews.css";
import { people } from "../../data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, image, text, desc } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <section className="customers">
      <div className="common-header">
        <h1 className="common-heading">Our Reviews</h1>
        {/* <div className="underline">
          <div className="small-underline"></div>
          <div className="big-underline"></div>
        </div> */}
      </div>

      {/* <p className="customers-paragraph">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis,
        aspernatur sint! Esse aliquam explicabo aperiam eos, ipsum nam
        consectetur ipsa!
      </p> */}

      <div className="customers-card-wrapper">
        <div className="customer-card">
          <div className="customer-image-wrapper">
            <img src={image} className="customer-image" />
          </div>
          <div className="customer-info">
            <h3 className="customer-fullname">{name}</h3>
            <p className="customer-paragraph-1">{text}</p>
            <p className="customer-paragraph-2">{desc} </p>
            <div className='button-container'>
              <button className='prev-btn' onClick={prevPerson}>
                <FaChevronLeft />
              </button>
              <button className='next-btn' onClick={nextPerson}>
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
        )
      </div>
    </section>
  );
}

export default Reviews;