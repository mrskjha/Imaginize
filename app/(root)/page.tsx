import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-row '>
      <h1>Home</h1>
      <div className='flex flex-col top-0 pl-96'>

      <UserButton afterSwitchSessionUrl='/'></UserButton>
      </div>
    </div>
  )
}

export default Home
