import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./GlobalStyle"
import { Header } from "./components/Home/Header/header"
import { Main } from "./components/Main"
import { BrowserRouter } from 'react-router-dom'

const cores = {
  primaryColor:'rgba(76, 5, 131, 1)',
  primaryShadow:' #4c058356 0 0 6px',
  colorMenuItem: 'linear-gradient(140.41deg, #1BA6D2 -0.64%, rgba(24, 89, 188, 0.91) 102.43%);'
}

function App() {
  return (
    <ThemeProvider theme={cores}>
      <BrowserRouter>
        <Header />
        <Main />
        
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
