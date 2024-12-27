import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import PasswordReset from './pages/passwordreset/PasswordReset'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/passwordreset' element={<PasswordReset />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
