import React, { useContext, useEffect, useState } from 'react'
import './history.css'
import { TransactionContext } from '../Transactions/TransactionContext'

export const History = ({submittedText, submittedNum}) => {
    const { transactions } = useContext(TransactionContext)
    const [history, setHistory] = useState([])

    useEffect(() => {
        if (submittedText && submittedNum) {
            setHistory (prev => [...prev, {text: submittedText, amount: submittedNum}])
        }
    }, [submittedText, submittedNum])

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
        </div>
    </div>
  )
}
