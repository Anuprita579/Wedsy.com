import React from 'react'

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ForumIcon from '@mui/icons-material/Forum';

function Sidebar() {
  return (
    <div className='flex flex-col bg-purple-950 w-1/5 h-screen'>
        <div className='flex text-2xl  mx-5 my-3 text-white'>
            <HomeIcon className='mx-4'></HomeIcon>
            <h3>Home</h3>
        </div>

        <div className='flex text-2xl mx-5 my-3 text-white'>
            <SearchIcon className='mx-4'></SearchIcon>
            <h3>Search</h3>
        </div>

        <div className='flex text-2xl  mx-5 my-3 text-white'>
            <CardGiftcardIcon className='mx-4'></CardGiftcardIcon>
            <h3>Card</h3>
        </div>

        <div className='flex text-2xl mx-5 my-3 text-white'>
            <ForumIcon className='mx-4'></ForumIcon>
            <h3>Community</h3>
        </div>
      
    </div>
  )
}

export default Sidebar
