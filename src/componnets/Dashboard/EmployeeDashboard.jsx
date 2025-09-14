import React from 'react'
import Empheader from '../../dashboardSmall/Empheader'
import Emptasklist from '../../dashboardSmall/Emptasklist'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-15 bg-gray-800 h-screen text-white'>
      <Empheader />
      <Emptasklist />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard
