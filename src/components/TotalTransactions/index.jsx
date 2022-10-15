import React from 'react'
import { TotalTransactionItem } from '../TotalTransactionItem'
import * as C from './style'

export const TotalTransactions = () => {
    const colorTotalTransaction = props => props.theme.colorTotalTransaction
    const colorTotalPayments = props => props.theme.colorTotalPayments
    const colorTotalLoans = props => props.theme.colorTotalLoans
  return (
    <C.Container>
       <TotalTransactionItem 
       headingTotal={'Total caixinha'}
        totalTypeTransactions={1200}
        typeBgColor={colorTotalTransaction}
       />
        <C.GroupSecundaryTotals>
            <TotalTransactionItem 
            headingTotal={'Total pagamentos'}
            totalTypeTransactions={2000}
            typeBgColor={colorTotalPayments}
            />
            <TotalTransactionItem 
            headingTotal={'Total empréstimos'}
            totalTypeTransactions={800}
            typeBgColor={colorTotalLoans}
            />
        </C.GroupSecundaryTotals>
    </C.Container>
  )
}
