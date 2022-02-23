import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const [showAddForm, setShowAddForm] = useState(false);

   const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { 
        ...enteredExpenseData,
        id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
   }

   const addExpenseHandler= (event) =>{
        setShowAddForm(true);
  }   

  const cancelAddFormHandler = () =>
  {
    setShowAddForm(false);
  }

   let content = <div className='new-expense__actions'>
     <button type='submit' onClick={addExpenseHandler}>Add Expense</button>
   </div>

   if(showAddForm)
   {
    content =<ExpenseForm  onSaveExpenseData ={saveExpenseDataHandler} onClickCancel={cancelAddFormHandler} />
   }
  

   return <div className="new-expense">
       {content}
   </div>
}

export default NewExpense