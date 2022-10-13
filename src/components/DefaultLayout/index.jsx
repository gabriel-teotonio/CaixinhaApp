import React from 'react'
import { Outlet } from 'react-router'
import Aside from '../Home/Aside/aside'
import { Header } from '../../components/Home/Header/header'
import * as C from './style'

export const DefaultLayout = () => {
  return (
    <C.Container>
        <Aside />
        <C.ContentLayout>
          <Header />
          <Outlet />
        </C.ContentLayout>
    </C.Container>
  )
}
