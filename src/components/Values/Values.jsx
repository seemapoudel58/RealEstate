import React, { useState } from 'react';
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import data from "../../utils/accordion.jsx"; // Adjust the path based on your project structure
import "./Values.css";

const Values = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="value" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText" >
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better.
          </span>

          <div className="accordion ">
            {data.map((item, index) => (
              <div key={index} className={`accordionItem ${visibleIndex === index ? 'expanded' : 'collapsed'}`}>
                <div className="accordionHeader flexCenter accordionButton">
                  <div className=" icon">{item.icon}</div>
                  <span className='primaryText'>
                    {item.heading}
                  </span>
                  <div className="icon" onClick={() => toggleVisibility(index)}>
                    {visibleIndex === index ? <MdOutlineArrowDropUp size={20} /> : <MdOutlineArrowDropDown size={20} />}
                  </div>
                </div>
                {visibleIndex === index && (
                  <div className="accordionBody">
                    <p className="secondaryText">{item.detail}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
