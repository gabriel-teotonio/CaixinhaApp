import React from 'react'
import { HeaderOverviewList } from '../../components/HeaderOverviewList'
import { RecentTransactions } from '../../components/RecentTransactions'
import * as C from './style'

export const Overview = () => {
  return (
    <C.Container>
        <C.DashOverview>
            <C.HeaderOverview>
                <HeaderOverviewList />
            </C.HeaderOverview> 
        </C.DashOverview>
      <RecentTransactions />
    </C.Container>
  )
}
