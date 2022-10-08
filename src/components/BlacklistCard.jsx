import React from 'react'

function BlacklistCard() {
  return (
    <div className=' flex justify-between items-center hover:bg-white px-4 py-6'>
        <h3 className=' text-base'>programmerolakay@gmail.com</h3>
        <p className=' cursor-pointer text-header_bg_text hover:underline underline-offset-1'>Remove</p>
    </div>
  )
}

export default BlacklistCard
