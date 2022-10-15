import React from 'react'
import * as C from './style'
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from 'react-icons/bs'

export const RecentTransactionItem = ({transaction}) => {
  const typeTextTransaction = transaction.typeTransaction === 'payment' ? 'Pagou' : 'Emprestou'
  return (  
    <C.Container>
      <C.ContentItem>
          <C.ContentItemName>{transaction.name}</C.ContentItemName>
          <C.ContentTypeTransaction>
            {typeTextTransaction} R${transaction.valueTransaction}
          </C.ContentTypeTransaction>
      </C.ContentItem>
        <C.IconTransaction 
        typeTransaction={transaction.typeTransaction} 
        >
            {transaction.typeTransaction === 'payment' ? <BsFillArrowDownSquareFill/>:<BsFillArrowUpSquareFill/>}
        </C.IconTransaction> 
    </C.Container>
  )
}
