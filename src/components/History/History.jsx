import React, { useContext, useEffect, useState } from 'react'
import './history.css'
import { TransactionContext } from '../Transactions/TransactionContext'

export const History = ({submittedText, submittedNum}) => {
    const { transactions, setTransactions } = useContext(TransactionContext)
    const [history, setHistory] = useState([])

    useEffect(() => {
        if (submittedText && submittedNum) {
            setHistory (prev => [...prev, {text: submittedText, amount: submittedNum}])
        }
    }, [submittedText, submittedNum, setTransactions])

    const handleRemoveLatest = () => {
        if (transactions.length > 0){
            setTransactions(transactions.slice(0, -1));
            setHistory(history.slice(0, -1))
        }
    }

  return (
    <div>
        <div className='history'>
            <h5>All Time Transaction History</h5>
            <ul>
                {history.map((item, index) => 
                <li key={index} className={item.amount > 0 ? 'income' : 'expense'}>
                    {item.text} {item.amount}
                </li>
            )}
            </ul>
            <button className='button' type='submit' onClick={handleRemoveLatest}>Delete recent entry</button>
        </div>
    </div>
  )
}
