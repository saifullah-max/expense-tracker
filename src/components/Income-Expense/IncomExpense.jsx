import React, { useContext } from 'react'
import { History } from '../History/History'
import './IncomeExpense.css'
import { TransactionContext } from '../Transactions/TransactionContext'

export const IncomExpense = () => {
  const { transactions } = useContext(TransactionContext)

  const income = transactions
  .filter(transaction => transaction.amount > 0)
  .reduce((acc, transaction) => acc + transaction.amount, 0);

const expense = transactions
  .filter(transaction => transaction.amount < 0)
  .reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <div className='box'>
        <div className='box__inside'>
          <div className='box__income'>
        <h3>Income</h3>
        <h2>${income}</h2>
        </div>
        <div className='box__expense'>
        <h3 >Expense</h3>
        <h2>${Math.abs(expense)}</h2>
        </div>
        </div>
      </div>
    </div>
  )
}
