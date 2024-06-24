import React, { ReactNode } from 'react'
import Sidebar from '../Sidebar/page'

interface Layoutprops {
    children: ReactNode
}
const Layout: React.FC<Layoutprops>=({children})=> {
  return (
    <div className='flex gap-4'>
        <Sidebar/>
        {children}
    </div>
  )
}


export default Layout