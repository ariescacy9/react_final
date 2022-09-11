import React from 'react'
import ContextProvider from '../../hooks/useList'
import AddExpenses from '../gastos/AddExpenses'
import CountExpenses from '../gastos/CountExpenses'
import ExpensesMonth from '../gastos/ExpensesMonth'
import RedSocial from '../redSocial/RedSocial'
import './Contact.css'

function Contact() {
  return (
    <div className='contacto'>
      <h1>CONTACTO</h1>
      <ContextProvider>
        <AddExpenses/>
        <CountExpenses/>
        <ExpensesMonth/>
      </ContextProvider>
      <RedSocial/>
    </div>
  )
}

export default Contact