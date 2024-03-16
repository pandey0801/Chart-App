import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'

const ExpensesList = (props)=>
{
    // console.log(props);
    if(props.item.length ===0 )
    {
        return <h2 className='expenses-list__fallback'> Found no expenses.</h2>
    }

    else if(props.item.length === 1 )
    {
        return (<div>
                <h2 className='expenses-list__fallback'>one</h2>
                {props.item.map((expense) => (
                     <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                        key={expense.id}
                    />
                 ))}
                </div>)
    }

    return(
        <div className='expenses-list'>
        {props.item.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
            ))}
        </div>
    )
}

export default ExpensesList