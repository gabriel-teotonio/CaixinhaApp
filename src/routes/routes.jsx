import { Navigate, Route, Routes } from "react-router"
import { Overview } from "../pages/Overview"
import { Loans } from "../pages/Loan"
import { Payments } from "../pages/Payments"
import { Users } from "../pages/Users"
import { Login } from "../pages/Login"
import { DefaultLayout } from "../components/DefaultLayout"
import { Register } from "../pages/Register"



export const RoutesApp = () => {
  return(
    <Routes>
       <Route path="/" element= {<DefaultLayout />}>
          <Route path="/" element={<Navigate replace to="Inicio" />} />
          <Route path="Inicio" element={<Overview />} />
          <Route path="Usuarios" element={<Users />} />
          <Route path="Pagamentos" element={<Payments />} />
          <Route path="Emprestimos" element={<Loans />} />
       </Route>
       <Route path="Login" element={<Login />}/>
       <Route path="Register" element={<Register />}/>
    </Routes>
  )     
}