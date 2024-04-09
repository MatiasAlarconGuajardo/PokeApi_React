import React, { ReactNode } from 'react'



const Layout = ({children}: {children: ReactNode}) => {
  return (
    <div className='main-content'>
    {children}
    </div>
  )
}

export default Layout;
