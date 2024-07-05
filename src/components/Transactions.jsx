import React, { useState } from 'react'
import { Header } from './Header'
import { History } from './History'

export const Transactions = () => {
    const [inputNum, setInputNum] = useState('')
    const [submittedNum, setSubmittedNum] = useState(null)
    
    const [inputText, setInputText] = useState('')
    const [submittedText, setSubmittedText] = useState(null)

    const [transactioncount, setTransactionCount] = useState(1)
    const transactionNumber = () => {
        setTransactionCount(transactioncount + 1)
    }

    const textHandler = (e) => {
        setInputText(e.target.value)
    }
    const numberHandler = (e) => {
        setInputNum(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setSubmittedText(inputText);
        setInputText('')
        setSubmittedNum(inputNum)
        setInputNum('')
        
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type='text' onChange={textHandler} value={inputText}/>
        <input type='number' onChange={numberHandler} value={inputNum}/>
        <button type='submit'>Submit</button>
        </form>
        {submittedText && submittedNum !== null && (
            <div>
                <History submittedText= {submittedText} submittedNum={submittedNum} transactionNumber={transactioncount}/>
                
            </div>
        )}
    </div>
  )
}
