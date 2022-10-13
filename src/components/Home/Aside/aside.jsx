import React from 'react'
import * as C from "./style"
import { sidebarData } from '../../../Data/data'
import { BsBoxArrowInRight } from 'react-icons/bs'
import { Link, NavLink } from 'react-router-dom'  


function Aside() {
  return (
    <C.Container>
      <h1>Caixinha</h1>
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