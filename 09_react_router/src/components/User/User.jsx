import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-200 text-center text-2xl py-4'>User: {userid}</div>
  )
}

export default User