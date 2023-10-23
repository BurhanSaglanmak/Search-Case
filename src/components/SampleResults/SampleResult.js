import React from "react";
import location from '../../assets/images/location.png'

const SampleResult = ({ item, index }) => {
  const { city,  country } = item;
  return (
      <li
        className="searchbar__listitem searchbar__listitem--hover"
        key={index}
      >
         <div className="searchbar__leftrow">
          <img src={location} alt="..." />
        <div className="searchbar__leftside">
          <div className="searchbar__location">
            <p className="searchbar__location-text">
              {country}
            </p>
          </div>
          <div className="searchbar__date-and-name">
            <p className="searchbar__date-and-name-text">
            {city}
            </p>
          </div>
        </div>
          </div>
       
      </li>
  );
};

export default SampleResult;
