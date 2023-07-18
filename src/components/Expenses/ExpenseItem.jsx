import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../card/Card";

const ExpenseItme = (props) => {
  // const [title, setTitle] = useState(props.title);

  // let title = props.title;

  // const clickHandler = () => {
  //   setTitle("updated");
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2>{props.title}</h2>
        <div className="expense-item_description">
          <div className="expense-item__price">${props.amount}</div>
        </div>

        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItme;
