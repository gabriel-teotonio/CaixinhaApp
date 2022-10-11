import React from 'react'
import { sidebarData } from '../../../Data/data'
import * as C from "./style"
import { BsBoxArrowInRight } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'


function Aside() {
  return (
    <C.Container>
        <C.Menu>
            {sidebarData.map((item, index) => (
                <C.MenuItem key={index}>
                      <NavLink to={item.path}>
                          <item.icon />
                          <span>{item.heading}</span>
                      </NavLink>
                </C.MenuItem>
            ))}
                <C.MenuItem>
                  <Link to="#">
                      <BsBoxArrowInRight role="button" type="button"/>
                  </Link>
                </C.MenuItem>
        </C.Menu>
    </C.Container>
  )
}

export default Aside