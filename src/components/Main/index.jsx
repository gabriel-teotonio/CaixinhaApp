import React from 'react'
import { RoutesApp } from '../../routes/routes'
import Aside from '../Home/Aside/aside'
import { Container } from './style'

export const Main = () => {
  return (
    <Container>
        <Aside />
        <RoutesApp />
    </Container>
  )
}
