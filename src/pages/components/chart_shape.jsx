import React, { useState, useEffect } from 'react';
import './chart.css';

export function ExpensesChart() {
  const [data, setData] = useState([]);  
  //find the current day
  const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const currentDay = daysOfWeek[new Date().getDay()]; 


  // Fetch the JSON data when the component mounts
  useEffect(() => {
    fetch('../../../data.json')  
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);  // Set the data into the state
      })
      .catch((error) => {
        console.error('Error fetching the data:', error);
      });
  }, []);  

  return (
    <div className="expenses-chart">
      <div className="chart">
        {data.map((item, index) => (
          <div
            key={index}
            className={`bar ${item.day === currentDay ? 'highlight' : ''}`} // Highlight the current day's bar
            style={{ height: `${(item.amount / Math.max(...data.map(d => d.amount))) * 100}%` }} // Normalize height
          >
            <span className="expense-value">${item.amount.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="labels">
        {data.map((item, index) => (
          <div key={index} className="day-label">
            {item.day.charAt(0).toUpperCase() + item.day.slice(1)} 
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpensesChart;

