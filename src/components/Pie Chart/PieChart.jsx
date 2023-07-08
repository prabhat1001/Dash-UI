import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

import "./PieChart.css";

const PieChart = () => {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    const getname = [];
    const getprice = [];
    const getcolor = [];

    const getData = async () => {
      const response = await fetch(
        "https://api.coinranking.com/v2/coins/?limit=10"
      );
      const data = await response.json();
      console.log(data);

      for (let i = 0; i < 4; i++) {
        getname.push(data.data.coins[i].name);
        getprice.push(data.data.coins[i].price % 100);
      }
      setName(getname);
      setPrice(getprice);
    };

    getData();
  }, []);

  return (
    <div className="pie-cont">
      <div className="pie-heading">Top Products</div>
      <input className="date" type="date"></input>
      <Pie
        data={{
          labels: name,
          datasets: [
            {
              data: price,
              backgroundColor: ["#EE8484", "#F6DC7D", "#d584ee", "#98D89E"],
              borderColor: ["#EE8484", "#F6DC7D", "#d584ee", "#98D89E", ,],
              borderWidth: 1,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: {
              fullSize: true,
              position: "right",
              labels: {
                boxWidth: 30,
                usePointStyle: true,
                boxHeight: 5,
                padding: 20,
                font: {
                  size: 10,
                  // weight: 'bold',
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
