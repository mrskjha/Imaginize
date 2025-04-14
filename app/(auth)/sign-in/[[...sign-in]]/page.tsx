import { SignIn } from '@clerk/nextjs'

import React from 'react'

const SignInPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <SignIn />
    </div>
  )
}

export default SignInPage
