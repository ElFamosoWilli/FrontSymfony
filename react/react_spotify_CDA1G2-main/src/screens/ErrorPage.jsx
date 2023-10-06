import React from 'react'
import { MdDangerous } from 'react-icons/md'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
        <MdDangerous className='text-9xl text-red-600 ' />
        <h1>oops</h1>
        <p>Mais vous fumez monsieur !</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        <a href="/" className='text-green_06 hover:text-green'>Revenez vers la dignité</a>
    </div>
  )
}

export default ErrorPage