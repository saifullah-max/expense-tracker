import React, { useContext, useState, useEffect, useRef } from 'react'
import { Header } from '../Header/Header'
import { History } from '../History/History'
import { TransactionContext } from './TransactionContext'
import './Transactions.css'

export const Transactions = () => {
    const [inputNum, setInputNum] = useState('')
    const [submittedNum, setSubmittedNum] = useState(null)
    
    const [inputText, setInputText] = useState('')
    const [submittedText, setSubmittedText] = useState(null)

    const { addTransaction } = useContext(TransactionContext)

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
        addTransaction(inputText, parseFloat(inputNum))
    }

    const textInputRef = useRef(null);

    useEffect(() => {
        if (textInputRef.current) {
            textInputRef.current.focus();
        }
    }, []);

  return (
    <div >
        <div className='transactionForm'>
        <form onSubmit={submitHandler}>
            <div className='form__inputs'>
        <input type='text' onChange={textHandler} ref={textInputRef} value={inputText} placeholder='Enter amount purpose...' className='form__textInput'/>
        <input type='number' onChange={numberHandler} value={inputNum} placeholder='Enter amount...' className='form__numberInput'/>
        <button type='submit' className='button'>Submit</button>
             </div>
        </form>
        </div>
        {submittedText && submittedNum !== null && (
            <div>
                <History submittedText= {submittedText} submittedNum={submittedNum} />
                
            </div>
        )}
    </div>
  )
}
