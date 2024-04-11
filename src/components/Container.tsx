import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-[90%] lg:w-[80%] m-auto'>
      {children}
    </div>
  )
}

export default Container