import React from 'react'
import { Outlet } from 'react-router'
import Aside from '../Home/Aside/aside'

export const DefaultLayout = () => {
  return (
    <>
        <Aside />
        <Outlet />
    </>
  )
}
