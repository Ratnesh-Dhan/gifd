'use client'
import React from 'react'

const OverviewPrograme = (top_image?: string) => {
  return (
    <div>
      {top_image ===""? null : <div className='w-full h-[70vh] bg-cover bg-center flex items-center'
      style={{
        backgroundImage: `url(${top_image})`,
      }}
      > 
      </div>}

    </div>
  )
}

export default OverviewPrograme