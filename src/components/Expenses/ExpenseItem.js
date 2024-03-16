// import './Expense.css';

// import React, {useState} from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';


function ExpenseItem(props){

// console.log(props)

// const [amount, setTitle] = useState(props.amount);
  
// // const clickHandler = ()=>{
// //     setTitle("100");
// // // console.log(amount);
// // };


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Delete</button> */}
        </Card>

        )
}
export default ExpenseItem;

