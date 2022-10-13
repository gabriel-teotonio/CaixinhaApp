import React from 'react'
import { headerOverviewData } from '../../Data/data'
import { HeaderOverviewItem } from '../HeaderOverviewItem'
import { Container } from './style'


export const HeaderOverviewList = () => {
  return (
    <Container> 
        {headerOverviewData.map((item, index) => (
            <HeaderOverviewItem 
              key={index}
              headingName={item.heading}
              transaction={item.TransactionMounth}
            />
        ))}
    </Container>
  )
}
