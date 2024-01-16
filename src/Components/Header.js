import React from 'react'

import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonIcon from '@mui/icons-material/Person';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';

function Header() {
  return (
    <>
        <div className='bg-purple-900 flex justify-between items-center py-3 sticky top-0 z-50 w-full '>
            <div className='text-amber-300 flex'>
                <HdrWeakIcon className='mx-5 mt-2'></HdrWeakIcon>
                <h1 className='text-amber-300 mx-5 text-3xl font-bold max-sm:text-xl'>Wedsy.com</h1>
            </div>

            <div className='text-white float-right space-x-4 mr-5' >
                <NotificationsIcon></NotificationsIcon>
                <PersonIcon></PersonIcon>
            </div>
        </div>
        
    </>
  )
}

export default Header
