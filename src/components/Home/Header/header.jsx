import React from 'react'
import * as C from './style'
import LogoCaixinha from '../../../imgs/Logo-caixinha.svg'

export const Header = () => {
  return (
    <C.Container>
      <C.Logo href='#'>
        <h1>Caixinha</h1>
        <img src={LogoCaixinha} alt="" />
      </C.Logo>
        <a href='#'>Perfil</a>
    </C.Container>
  )
}
