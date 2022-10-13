import React from 'react'
import { Container, Heading, TransactionMouth } from './style'

export const HeaderOverviewItem = ({headingName, transaction}) => {
  return (
    <Container>
        <Heading>{headingName}</Heading>
        <TransactionMouth>R$ {transaction.toFixed(2)}</TransactionMouth>
    </Container>
  )
}
