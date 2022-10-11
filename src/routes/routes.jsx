import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Loans } from '../pages/Loan'
import { Overview } from '../pages/Overview'
import { Payments } from '../pages/Payments'
import { Users } from '../pages/Users'

export const RoutesApp = () => {
  return (
        <Routes>
            <Route path='/Overview' element={<Overview />}/>
            <Route path='/Users' element={<Users />}/>
            <Route path='/Payments' element={<Payments />}/>
            <Route path='/Loans' element={<Loans />}/>
        </Routes>
  )
}
