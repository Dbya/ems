import React, { useEffect, useState } from 'react'
import Login from './componnets/Auth/Login'
import EmployeeDashboard from './componnets/Dashboard/EmployeeDashboard'
import AdminDashboard from './componnets/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/Localstorage'

const App = () => {

  const[user,setUser]=useState(null)
  const handleLogin=(email,password)=>{
      if(email=="admin@me.com" && password=="123"){
       setUser('admin')
       console.log(user)
      }else if(email=="user@me.com" && password=="123"){
       setUser("employee")
       console.log(user)
      }
      else{
        alert("Invalid Credentials")
      }
  }
  
  
  useEffect(()=>{
    setLocalStorage()
    getLocalStorage()
  })

  return (
    <>
    {!user ? <Login  handleLogin={handleLogin} /> :'' }
    {user=="admin" ? <AdminDashboard /> : <EmployeeDashboard /> }
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App
