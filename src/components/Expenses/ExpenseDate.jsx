import React from "react";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  //   const expenseDate = props.date;

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  //   const formattedDate = expenseDate.toLocaleString("en-US", {
  //     day: "numeric",
  //     month: "long",
  //     year: "numeric",
  //   });

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
