import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChar';

const Expenses = (props) => {

 const [filteredYear,setFilteredYear] = useState('2020')

  const selectFilterHandler = (filterSelected) => {
    setFilteredYear(filterSelected);
  }

  const filteredExpenses = props.items.filter(n=> n.date.getFullYear().toString() === filteredYear);

  return (
    <li>
    <Card className="expenses">
    <ExpensesFilter onSelectFilter={selectFilterHandler} selected = {filteredYear}></ExpensesFilter>
    <ExpensesChart expenses ={filteredExpenses}/>
    <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
  );
};

export default Expenses;
