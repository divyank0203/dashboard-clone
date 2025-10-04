import React from 'react'
import Box from './Box'

function Revenuebox() {
  return (
    <div className='grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2'>
    <div className='bg-blue-600 hover:bg-blue-800 text-white rounded-lg m-2 col-span-1 shadow-md'>
        {/* <div className=' flex justify-start text-sm pl-3 pt-3 '>
            <div className=''>Next Payout</div>
            <div className='pl-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
</div>
        </div>
        <div className='flex justify-between p-3'>
            <div className=' font-bold text-left text-2xl'>Rs. 2,23,000</div>
            <div className=' hover:cursor-pointer hover:text-black underline text-xs justify-end text-right pt-2'>23 orders</div>
        </div> */}
        <Box title = "Next Payout" amount = "Rs. 2,23,000" orders = "23 orders"/>
        
        <div className='bg-blue-800 rounded-md flex justify-between text-xs'>
            <div className='p-2 pl-3'>Next Payment Date: </div>
            <div className='p-2 pr-3'>Today, 4:00 PM</div>
        </div>
    </div>
    <div>
        <div className='shadow-md rounded-lg m-2 col-span-1'>
        {/* <div className=' flex justify-start text-sm pl-3 pt-3 '>
            <div className=''>Amount Pending</div>
            <div className='pl-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
</div>
        </div>
        <div className='flex justify-between p-3'>
            <div className=' font-bold text-left text-2xl'>Rs. 2,23,000</div>
            <div className=' hover:cursor-pointer hover:text-blue-500 underline text-xs justify-end text-right pt-2'>13 orders</div>
        </div> */}
        <Box title = "Amount Pending" amount = "Rs. 1,46,000" orders = "13 orders"/>
        
    </div>

    </div>
    <div>
               <div className=' rounded-lg m-2 col-span-1 shadow-md'>
        {/* <div className=' flex justify-start text-sm pl-3 pt-3 '>
            <div className=''>Amount Processed</div>
            <div className='pl-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
</svg>
</div>
        </div>
        <div className='flex justify-between p-3'>
            <div className=' font-bold text-left text-2xl'>Rs. 2,23,000</div>
            
        </div> */}
        <Box title = "Amount Processed" amount = "Rs. 5,89,439"/>
        
    </div>
    </div>
    </div>
  )
}

export default Revenuebox