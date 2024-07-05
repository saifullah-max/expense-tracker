import React from 'react'

export const History = ({submittedText, submittedNum, transactionNumber}) => {
  return (
    <div>
        History of Transactions:
        <h3>Transaction {transactionNumber}:</h3>
        <p>{submittedText}  {submittedNum}</p>
    </div>
  )
}
