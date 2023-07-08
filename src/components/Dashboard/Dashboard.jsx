import React from "react";
import "./Dashboard.css";

//Copmponents imported
import ImpCards from "../TopCards/Cards.jsx";
import PieChart from "../Pie Chart/PieChart.jsx";
import LineChart from "../Line Chart/LineChart.jsx";
import Schedule from "../Schedule/Schedule.jsx";

// Images imported
import dashboardIcon from "../../assets/dashboard_icon.svg";
import transIcon from "../../assets/transaction_icon.svg";
import schedIcon from "../../assets/schedule_icon.svg";
import userIcon from "../../assets/user_icon.svg";
import settingsIcon from "../../assets/setting_icon.svg";
import searchIcon from "../../assets/search_icon.svg";
import notificationIcon from "../../assets/notification_icon.svg";

const Dashboard = () => {
  return (
    <div className="db-main-cont">
      <div className="db-left-cont">
        <div className="h-nav">
          <div className="h-nav-cont">
            <h1 className="db-heading">Board.</h1>
            <div className="h-nav-items">
              <ul>
                <li>
                  <img src={dashboardIcon} alt="google-logo" />
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <img src={transIcon} alt="google-logo" />
                  <a href="#">Transaction</a>
                </li>
                <li>
                  <img src={schedIcon} alt="google-logo" />
                  <a href="#">Schedule</a>
                </li>
                <li>
                  <img src={userIcon} alt="google-logo" />
                  <a href="#">Users</a>
                </li>
                <li>
                  <img src={settingsIcon} alt="google-logo" />
                  <a href="#">Settings</a>
                </li>
              </ul>
            </div>
            <div className="bottom-items">
              <ul>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="db-right-cont">
        <div className="content">
          <nav className="db-nav">
            <h3 className="section-name">Dashboard</h3>
            <div className="rhs-cont">
              <div className="search-bar-cont">
                <input
                  className="search-bar"
                  type="text"
                  placeholder="Search"
                />
                <img src={searchIcon} alt="search-icon" />
              </div>
              <img
                className="notify"
                src={notificationIcon}
                alt="notification-icon"
              />
            </div>
          </nav>
          <ImpCards />
          <LineChart />
          <div className="bottom-cont">
            <PieChart />
            <Schedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
