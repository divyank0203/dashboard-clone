import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between mt-4 mb-4  shadow-lg'>
        <div className='flex justify-start'>
            <div className='ml-3 text-lg font-semibold'>Payouts</div>
            <div className='flex justify-start ml-2 hover:cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 ml-2 mt-2 text-gray-600">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
<div className='ml-1 mt-2 text-xs text-gray-600'>How It Works</div>

            </div>
        </div>
        <div className=''>

            {/* <input type="text" className='p-3 bg-gray-200 rounded-sm w-96 h-2/3' placeholder='Search Features, Tutorial, etc.' /> */}

            

    
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="text" className='block p-3 pl-9 mb-3 bg-gray-200 rounded-md w-96 h-8' placeholder='Search Features, Tutorial, etc.' />
        <button type="submit" class="text-white absolute end-2.5 bottom-1.5 h-5 bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-0.5  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>


        </div>
        <div className='flex justify-end'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-8 text-gray-600  mb-2 mr-3 bg-gray-300 hover:cursor-pointer rounded-full p-2">
  <path fill-rule="evenodd" d="M1 8.74c0 .983.713 1.825 1.69 1.943.764.092 1.534.164 2.31.216v2.351a.75.75 0 0 0 1.28.53l2.51-2.51c.182-.181.427-.286.684-.294a44.298 44.298 0 0 0 3.837-.293C14.287 10.565 15 9.723 15 8.74V4.26c0-.983-.713-1.825-1.69-1.943a44.447 44.447 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482ZM5.5 6.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2.5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3.5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-8 bg-gray-300 rounded-full p-1.5 text-gray-600 hover:cursor-pointer mr-3">
  <path fill-rule="evenodd" d="M9.47 15.28a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 1 0-1.06-1.06L10 13.69 6.28 9.97a.75.75 0 0 0-1.06 1.06l4.25 4.25ZM5.22 6.03l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L10 8.69 6.28 4.97a.75.75 0 0 0-1.06 1.06Z" clip-rule="evenodd" />
</svg>


        </div>
    </div>
  )
}

export default Navbar
