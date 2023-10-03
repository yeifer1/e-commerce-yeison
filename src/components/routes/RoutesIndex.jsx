import {Routes, Route, Navigate} from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

import Home from '../Home/Home'
import Dashboard from '../pages/Dashboard'
import Secret from '../pages/Secret'
import LoginForm from '../pages/LoginForm'
import Cart from '../Cart'
import RegisterForm from '../pages/RegisterForm'
import ItemsDetails from '../pages/ItemsDetails'
const RoutesIndex = () => {
  const { isAuth } = useAuthContext()
  return (
    <Routes>
    
    <Route path='/' element={<Home />} />
          <Route
            path='/dashboard'
            element={
              isAuth
                ? <Dashboard />
                : <Navigate to='/login' replace />
          }
          />
      <Route path='/' element={<Home/>}></Route>
      <Route path='/secret' element={<Secret />} />
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<LoginForm/>}></Route>
      <Route path='/register' element={<RegisterForm/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/details/:id' element={<ItemsDetails/>}></Route>
      </Routes>
  )
}

export default RoutesIndex