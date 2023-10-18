
import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext' 
import { getMeUserService } from '../services/userServices.js'

import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import './Dashboard.css'

const Dashboard = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserService(userPayload.id)
        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.error('Ocurrio un error en Dashboard', error.message)
      }
    }
    fetchUserData()
  }, [userPayload.id])

  return (
    <>
    <Navbar/>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

      <h1>Bienvenid@ esta es tu cuenta: {userData.first_name} {userData.last_name}</h1>
      
      {
      userData?.first_name && <h2> {userData.first_name}</h2>
      }
      {
      userData?.last_name && <h2> {userData.last_name}</h2>
      }
      {
      userData?.gender && <h2> {userData.gender}</h2>
      }
      {
      userData?.email && <h2> {userData.email}</h2>
      }
      <Footer/>
    
    </>
  )
}
export default Dashboard