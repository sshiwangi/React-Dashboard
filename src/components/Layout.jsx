import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='flex flex-col flex-1'>
            <Header />
        <div className='p-4'>
            <div>{<Outlet/>}</div>
        </div>
        </div>
    </div>
  )
}

export default Layout