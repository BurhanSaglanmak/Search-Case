import React from "react";
import location from "../../assets/images/location.png"

const SampleResult = ({ item, index }) => {
  const { name, city, date, country} = item;
  // console.log(new Date(date));
  return (
    <div>
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
        <div className="searchbar__rightside">
        <div className="searchbar__location">
            <p className="searchbar__location-text">
              {name}
            </p>
          </div>
          <div className="searchbar__date-and-name">
            <p className="searchbar__date-and-name-text">
            {new Date(date).getDate()}/{new Date(date).getMonth() + 1}/{new Date(date).getFullYear()}
            </p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default SampleResult;
