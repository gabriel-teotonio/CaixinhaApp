import React from 'react'
import * as C from './style'
import { HiHome, HiUserCircle } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'



export const Header = () => {
  const { pathname } = useLocation()

  return (
    <C.Container>
      <C.NamePage>
        <HiHome />
        <span>{pathname}</span>
      </C.NamePage>
        <C.Profile href='#'>
          <HiUserCircle />
        </C.Profile>
    </C.Container>
  )
}
