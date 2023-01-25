import img from "../../../../images/user.webp";
import React from "react";

const MostPopular = () => {
  return (
    <div className="most__popular">
     <div className="most__popular--text">
     <h2 className="  most__popular--heading">most popular</h2>
      <p className=" most__popular--peragraph">92 songs</p>
     </div>
      <div className="song__list--row">
        <div className="song__list">
          <div className="song__details">
            <p className="">01</p>
            <img src={img} alt="" className="ml-1 song__list--img" />
            <div className="song__name ml-1">My Street</div>
          </div>
          <div className="song__play">pl</div>
        </div>
        <div className="song__list">
          <div className="song__details">
            <p className="">01</p>
            <img src={img} className="ml-1 song__list--img" alt="" />
            <div className="song__name ml-1">My Street</div>
          </div>
          <div className="song__play">pl</div>
        </div>
        <div className="song__list">
          <div className="song__details">
            <p className="">01</p>
            <img src={img} className="ml-1 song__list--img" alt="" />
            <div className="song__name ml-1">My Street</div>
          </div>
          <div className="song__play">pl</div>
        </div>
        <div className="song__list">
          <div className="song__details">
            <p className="">01</p>
            <img src={img} className="ml-1 song__list--img" alt=""/>
            <div className="song__name ml-1">My Street</div>
          </div>
          <div className="song__play">pl</div>
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
