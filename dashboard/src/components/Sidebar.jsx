import React from 'react'

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-48 z-50 mr-3 p-3 hidden md:block bg-gray-700 text-white text-sm font-semibold'>
        <div>
             
        </div>
        <div className='mb-4'>
          <div className='flex hover:cursor-pointer hover:bg-gray-300/20 rounded-md mb-1.5 p-1.5'>
            <div className='mr-3 mt-0.5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            </div>
            <div className='mt-0.5'>Home</div>
          </div>
        
           <div className='flex hover:cursor-pointer hover:bg-gray-300/20 rounded-md mb-1.5 p-1.5'>
            <div className='mr-3 mt-0.5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>


            </div>
            <div className='mt-0.5'>Shorts</div>
          </div>
          <div className='flex hover:cursor-pointer hover:bg-gray-300/20 rounded-md mb-1.5 p-1.5'>
            <div className='mr-3 mt-0.5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>


            </div>
            <div className='mt-0.5'>Subscriptions</div>
          </div>
        </div>
    </div>
  )
}

export default Sidebar