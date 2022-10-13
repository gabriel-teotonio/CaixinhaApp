import React from 'react'
import * as C from './style'

export const RecentTransactions = () => {
  return (
    <C.Container>
        <h2>Transações recentes</h2>
        <C.RecentTransactionList>
            <C.RecentTransactionItem>
                <h5>jucelino kunkest</h5> 
                <span>pagamento</span>
            </C.RecentTransactionItem>
            <C.RecentTransactionItem>
                <h5>jucelino kunkest</h5> 
                <span>pagamento</span>
            </C.RecentTransactionItem>
            <C.RecentTransactionItem>
                <h5>jucelino kunkest</h5> 
                <span>pagamento</span>
            </C.RecentTransactionItem>
            <C.RecentTransactionItem>
                <h5>jucelino kunkest</h5> 
                <span>pagamento</span>
            </C.RecentTransactionItem>
            <C.RecentTransactionItem>
                <h5>jucelino kunkest</h5> 
                <span>pagamento</span>
            </C.RecentTransactionItem>
        </C.RecentTransactionList>
    </C.Container>
  )
}
