import './NewExpense.css';
import ExpenseForm  from './ExpenseForm';
import React, {useState} from 'react';



const NewExpense = (props) =>
{
    const [showCustomComponent, setShowCustomComponent] = useState(false);

    const saveExpenseDataHandler= (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);

        setShowCustomComponent(false);
    }



const handleButtonClick = () => {
    setShowCustomComponent(true);
  };

const stopButtonHandler =()=>{
    setShowCustomComponent(false);
}



    return(
        <div className='new-expense'>

           {!showCustomComponent && <button onClick={handleButtonClick}>Add NEw Expense</button>}
            {showCustomComponent && <ExpenseForm 
            onSaveExpenseData ={saveExpenseDataHandler}
            onCancel={stopButtonHandler}
            />}
        </div>
    )
}

export default NewExpense;