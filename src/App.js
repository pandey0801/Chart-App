// import logo from './logo.svg';
// import './App.css';
// import './components/Expense.css'

// import React, {useState} from 'react';
// import { useState } from "react";
import React, {useState} from 'react';

import './components/Expenses/Expense.css'
// import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpenseFilter';
import ExpensesList from './components/Expenses/ExpensesList';
// import ExpenseButton from './components/NewExpense/ExpenseButton';
import ExpenseChart from './components/Expenses/ExpenseChart';

const DUMMY_EXPENSES = [
  {
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
    id: 'e1',
  },
  { 
    title: 'New TV', 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    id: 'e2', 
  },
  {
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: 'e3',
  },
  {
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
    id: 'e4',
  },
];

const App = () => {

  const [expenses,setEXpenses] = useState(DUMMY_EXPENSES);

  const AddExpenseHandler = expense =>{
    // console.log("in reat");
    // console.log(expense);
    setEXpenses((preExpense)=>{
      return [expense, ...preExpense];
    })
  }


  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler= selectedYear =>{
    setFilteredYear(selectedYear);

  //  const wantItem =  expenses.filter(item=>
  //   selectedYear==item.date

  // )
  };


//  const arr =  expenses.map(exp=>{
//   return exp.date.getFullYear().toString()
// })
//   // console.log(arr);

// // {arr==filteredYear?console.log("true"):console.log("false")}

// const fl = arr.filter(x=>{
//  return x==filteredYear
// })

// // console.log(fl);  
  // console.log(filteredYear);

  const filteredExpenses = expenses.filter(exp=>{
    return exp.date.getFullYear().toString() === filteredYear;
    // console.log(exp.date.getFullYear().toString())
  });

  // console.log(filteredExpenses);



  return (
    <div>

      <NewExpense onAddExpense={AddExpenseHandler} />
      {/* <ExpenseButton onAddExpense={AddExpenseHandler}/> */}
      {/* <ExpenseButton></ExpenseButton> */}

      
      {/* <ExpensesFilter/> */}
    
    <Card className="expenses">
     
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

<ExpenseChart expenses={filteredExpenses}/>

    <ExpensesList item={filteredExpenses}/>
{/* {filteredExpenses.length===0 && <p>No Elemnet</p>}
{filteredExpenses.length===1 && <p>Only single Expense here. Please add more...</p>}
{filteredExpenses.length>0 &&  filteredExpenses.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
))} */}

{/* {filteredExpenses.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
))} */}
    </Card>
    </div>
  );
}

export default App;
