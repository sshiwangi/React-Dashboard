import React from 'react'
import {Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
        <Sidebar />
        <div className='bg-neutral'>header</div>
        <div className='p-4'>
            <div>{<Outlet/>}</div>
        </div>
        
    </div>
  )
}

export default Layout