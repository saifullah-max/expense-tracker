import React, { useEffect, useState } from 'react'

export const History = ({submittedText, submittedNum, transactionNumber}) => {
    const [history, setHistory] = useState([])

    useEffect(() => {
        if (submittedText && submittedNum) {
            setHistory (prev => [...prev, {text: submittedText, amount: submittedNum}])
        }
    }, [submittedText, submittedNum])
  return (
    <div>
        <div>
        Recent Transaction History:
        <h3>Transaction {transactionNumber}:</h3>
        <p>{submittedText} {submittedNum}</p>
        </div>
        <div>
            <h5>All Time Transaction History</h5>
            <ul>
                {history.map((item, index) => 
                <li key={index}>
                    {item.text} {item.amount}
                </li>
            )}
            </ul>
        </div>
    </div>
  )
}
