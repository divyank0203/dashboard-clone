import React from 'react'

function Sidecon({icon, tit}) {
  return (
    <div>
          <div className='flex hover:cursor-pointer hover:bg-gray-300/20 rounded-md mb-1.5 p-1.5'>
            <div className='mr-3 mt-0.5'>
            {icon}

            </div>
            <div className='mt-0.5'>{tit}</div>
          </div>
    </div>
  )
}

export default Sidecon