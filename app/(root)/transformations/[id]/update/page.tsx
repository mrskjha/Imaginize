import { useRouter } from 'next/router'
import React from 'react'

const UpdateTransformationPage = () => {
    const router = useRouter();
    const { id } = router.query;

  return (
    <div>
      UpdateTransformationPage {id}
    </div>
  )
}

export default UpdateTransformationPage
