import React from "react";
import ExpenseItem from "./ExpensiveItmes.jsx";
export default function ExpenseList({ Array }) {
  const checkItems = (
    <h2 className="expenses-list__fallback">Items not Found</h2>
  );
  return (
    <ul className="expenses-list">
      {Array.length === 0 && checkItems}
      {Array.length > 0 &&
        Array.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            item={item.item}
            priceAmount={item.priceAmount}
            year={new Date(item.date).getFullYear()}
          />
        ))}
    </ul>
  );
}
