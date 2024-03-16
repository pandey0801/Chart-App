import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) =>
{
    // console.log(props);

    const [enteredTitle, setEnterTitle] =useState('');
    const [enteredAmount, setEnteredAmount]= useState('');
    const [enteredDate,setEnteredDate] = useState('');

    const titleChangeHandeler = (event) =>{
        setEnterTitle(event.target.value)
        // console.log(enteredTitle);
        // console.log(setEnterTitle(event.target.value));

    }

    // console.log(setEnterTitle(event.target.value));
    // console.log(setEnterTitle)

    
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value)
        // console.log(event.target.value);
      
    }

    // console.log(enteredDate);

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date (enteredDate)
            // data: enteredDate
        }
        // console.log(expenseData);
        
        // Props.onSaveExpenseData(expenseData);
        // console.Consolelog(Props.onSave(expenseData))
        // Props.onSave(expenseData);

        // const data = "Hello from child";
        props.onSaveExpenseData(expenseData);

    setEnterTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    }

    

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__controls'>
                    <label>title</label>
                    <input type='text' 
                     value={enteredTitle}
                    onChange={titleChangeHandeler}/>
                </div>

                <div className='new-expense__controls'>
                    <label>Amount</label>
                    <input type='number'
                     min="0.01" 
                     step="0.01" 
                     value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__controls'>
                    <label>Date</label>
                    <input type='date' 
                    // min="2019-01-01" 
                    // max="2022-12-31" 
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>

                <div className='new-expense__actions'>
                    <button type='button' onClick={props.onCancel}>Cancel</button>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;




