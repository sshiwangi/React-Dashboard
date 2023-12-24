import React from 'react'
import { GrTechnology } from "react-icons/gr";
import { Sidebar_Links } from '../lib/consts/navigation';
import {Link, useLocation} from 'react-router-dom'

function Sidebar() {
  return (
    <div className='bg-sidebarbg flex flex-col'>
        <div className='flex items-center gap-2 px-1 py-3'>
            <GrTechnology fontSize={24}/>
            <span className='text-lg'>TechHazel</span>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {Sidebar_Links.map((item)=> (
                <SidebarLink key={item.key} item={item}>
                    
                </SidebarLink>
            ))}
        </div>
        <div>Bottom</div>
    </div>
  
    )
}

function SidebarLink({item}) {
    const {pathname} = useLocation()
    return (
        <Link to={item.path} className={`flex items-center px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base ${pathname === item.path ? 'text-neutral-700 bg-white': ''}`}>
        <span className='text-xl'>{item.icon}</span>
        {item.label}
        </Link>
    )
}

export default Sidebar