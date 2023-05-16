import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar.jsx";
export default function chart({ dataPoints }) {
  const arrOfValues = dataPoints.map((dataPoints) => dataPoints.value);
  const totalMaximum = Math.max(...arrOfValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.laybel}
          value={dataPoint.value}
          maxVaule={totalMaximum}
          laybel={dataPoint.mouth}
        />
      ))}
    </div>
  );
}
