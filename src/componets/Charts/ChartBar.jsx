import React from "react";
import "./ChartBar.css";
export default function ChartBar({ value, laybel, maxVaule }) {
  let barFill = "0%";
  if (maxVaule > 0) {
    barFill = Math.round((value / maxVaule) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFill }}>
        </div>
      </div>
      <div className="chart-bar__label">{laybel}</div>
    </div>
  );
}
