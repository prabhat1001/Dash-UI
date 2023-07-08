import React from "react";
import "./Cards.css";

import cameraIcon from "../../assets/camera-icon.svg";
import transactionIcon from "../../assets/transaction-icon.svg";
import likeIcon from "../../assets/like-icon.svg";
import userIcon from "../../assets/total-users.svg";

const Cards = () => {
  return (
    <div className="cards-cont">
      <div className="first-half">
        <div className="cards" id="card-1">
          <p className="title">Total Revenue</p>
          <h2 className="numbers">$2,129,430</h2>
          <img src={cameraIcon} className="cards-icon" />
        </div>

        <div className="cards" id="card-2">
          <p className="title">Total Transactions</p>
          <h2 className="numbers">1,520</h2>
          <img src={transactionIcon} className="cards-icon" />
        </div>
      </div>

      <div className="second-half">
        <div className="cards" id="card-3">
          <p className="title">Total Likes</p>
          <h2 className="numbers">9,721</h2>
          <img src={likeIcon} className="cards-icon" />
        </div>

        <div className="cards" id="card-4">
          <p className="title">Total Users</p>
          <h2 className="numbers">892</h2>
          <img src={userIcon} className="cards-icon" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
