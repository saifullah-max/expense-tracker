import React, { useContext } from 'react'
import { IncomExpense } from '../Income-Expense/IncomExpense';
import { TransactionContext  } from '../Transactions/TransactionContext';

export const Header = ({submittedNum}) => {
  const { transactions } = useContext(TransactionContext)

  const Balance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0)

  return (
    <div>
        <h1>Expense Tracker</h1>
        <h4>YOUR BALANCE IS: </h4>
        <h3>${Balance}</h3>

        
    </div>
  )
}
