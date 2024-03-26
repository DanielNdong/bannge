"use client"
import React from 'react'
import { Subtitle } from '@/Components/Utilities/myUtlities';

const notFound = () => {
  return (
    <div className='text-xl p-12 w-max absolute top-52 right-0 left-0 m-auto'>
      <Subtitle>404 - Lo sentimos, no podemos encontrar el sitio.</Subtitle>
    </div>
  )
}

export default notFound