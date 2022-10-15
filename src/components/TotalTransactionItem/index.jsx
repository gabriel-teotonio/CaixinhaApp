import React from 'react'
import * as C from './style'

export const TotalTransactionItem = ({totalTypeTransactions,headingTotal, typeBgColor}) => {
  return (
    <C.Container typeBgColor={typeBgColor}>
        <h4>{headingTotal}</h4>
        <span>R$ {totalTypeTransactions}</span>
    </C.Container>
  )
}
