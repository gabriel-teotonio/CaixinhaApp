import React from 'react'
import { recentTransactionsData } from '../../Data/data'
import * as C from './style'
import { RecentTransactionItem } from '../RecentTransactionItem'

export const RecentTransactions = () => {
  return (
    <C.Container>
        <C.HeadingRecentTransactions>Transações recentes</C.HeadingRecentTransactions>
        <C.RecentTransactionList>
            {recentTransactionsData.map((transaction, index) => (   
                <RecentTransactionItem
                key={index}
                transaction={transaction}
                />
            ))}
        </C.RecentTransactionList>
    </C.Container>
  )
}
