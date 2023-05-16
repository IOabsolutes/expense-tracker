import Chart from "../Charts/Chart.jsx";
import React from "react";

export default function ExpenseChart({ expenses }) {
  const chartDataState = [
    {
      mouth: "Jan",
      value: 0,
    },
    {
      mouth: "Feb",
      value: 0,
    },
    {
      mouth: "Mar",
      value: 0,
    },
    {
      mouth: "Apr",
      value: 0,
    },
    {
      mouth: "May",
      value: 0,
    },
    {
      mouth: "Jun",
      value: 0,
    },
    {
      mouth: "Jul",
      value: 0,
    },
    {
      mouth: "Aug",
      value: 0,
    },
    {
      mouth: "Sep",
      value: 0,
    },
    {
      mouth: "Oct",
      value: 0,
    },
    {
      mouth: "Nov",
      value: 0,
    },
    {
      mouth: "Dec",
      value: 0,
    },
  ];

  for (const expense of expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataState[expenseMonth].value += expense.priceAmount;
  }

  return <Chart dataPoints={chartDataState} />;
}
