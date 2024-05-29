import React from 'react'

interface IContainer{
    children: React.ReactNode
}

function Container({children} : IContainer) {
  return (
    <div className='container mx-auto'>
        {children}
    </div>
  )
}

export default Container